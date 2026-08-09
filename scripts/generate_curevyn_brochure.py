from pathlib import Path
from io import BytesIO

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.graphics import renderPDF
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from svglib.svglib import svg2rlg

# ReportLab applies character spacing on text objects rather than the canvas.
# The brochure's compact labels remain legible without it, so this keeps the
# drawing helpers portable across the installed ReportLab version.
if not hasattr(canvas.Canvas, "setCharSpace"):
    canvas.Canvas.setCharSpace = lambda self, value: None


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "CureVyn-Pharmaceuticals-Brochure.pdf"
IMAGES = ROOT / "Images"

W, H = A4
INK = HexColor("#263B42")
SAGE = HexColor("#657C70")
GOLD = HexColor("#D8C69B")
PORCELAIN = HexColor("#F7F6F2")
MIST = HexColor("#ECEAE3")
MUTED = HexColor("#52615B")
LINE = HexColor("#D7D8D1")

PRODUCTS = [
    ("CureVyn-52", "Liver support syrup", "100 ml oral syrup", "CureVyn-52.jpeg"),
    ("CureVyn-650", "Paracetamol tablets IP", "650 mg tablet presentation", "CureVyn-650.jpeg"),
    ("CureVyn-Ibuprofen", "Ibuprofen tablets USP", "200 mg tablet presentation", "CureVyn-Ibuprophen.jpeg"),
    ("CureVyn-DSR", "Gastro care", "Digestive support format", "CureVyn-DSR.jpeg"),
]

NUTRACEUTICALS = [
    ("OvaCare", "Women's wellness", "PCOS and cycle wellness support", "CureVyn-OvaCare.jpeg"),
    ("HerVita", "Daily vitality", "Women's daily multivitamin", "CureVyn-HerVita.jpeg"),
]


def image(c, filename, x, y, width, height, mode="contain"):
    path = IMAGES / filename
    reader = ImageReader(str(path))
    iw, ih = reader.getSize()
    ratio = min(width / iw, height / ih) if mode == "contain" else max(width / iw, height / ih)
    dw, dh = iw * ratio, ih * ratio
    dx, dy = x + (width - dw) / 2, y + (height - dh) / 2
    c.saveState()
    clip = c.beginPath()
    clip.rect(x, y, width, height)
    c.clipPath(clip, stroke=0, fill=0)
    c.drawImage(reader, dx, dy, dw, dh, mask="auto")
    c.restoreState()


def logo(c, x, y, inverse=False, scale=1):
    cure = PORCELAIN if inverse else INK
    vyn = GOLD if inverse else SAGE
    mark = 34 * scale
    mark_fill = "#f7f4ee" if inverse else "#263b42"
    mark_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
      <path fill="{mark_fill}" d="M21 2.5c10.22 0 18.5 8.28 18.5 18.5S31.22 39.5 21 39.5 2.5 31.22 2.5 21 10.78 2.5 21 2.5Z"/>
      <path fill="none" stroke="#d8c69b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.35" d="M27.8 11.9c-7.8.28-12.5 4.26-12.5 10.6 0 3.61 2.25 6.37 5.97 6.37 4.75 0 7.2-3.74 7.05-8.62-.04-1.19-.2-2.46-.52-3.76ZM16.2 27.13c2.55-3.93 5.52-7.01 10.58-10.03"/>
    </svg>'''
    mark_drawing = svg2rlg(BytesIO(mark_svg.encode("utf-8")))
    mark_drawing.scale(mark / 42, mark / 42)
    renderPDF.draw(mark_drawing, c, x, y)
    c.setFont("Helvetica-Bold", 19 * scale)
    c.setFillColor(cure)
    c.drawString(x + mark + 8 * scale, y + 8 * scale, "Cure")
    cure_width = stringWidth("Cure", "Helvetica-Bold", 19 * scale)
    c.setFillColor(vyn)
    c.drawString(x + mark + 8 * scale + cure_width, y + 8 * scale, "Vyn")
    c.setFont("Helvetica-Bold", 4.7 * scale)
    c.setFillColor(GOLD if inverse else SAGE)
    c.setCharSpace(1.2 * scale)
    c.drawString(x + mark + 9 * scale, y + 2 * scale, "PHARMACEUTICALS")
    c.setCharSpace(0)


def label(c, text, x, y, color=SAGE):
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 7)
    c.setCharSpace(1.8)
    c.drawString(x, y, text.upper())
    c.setCharSpace(0)


def wrap(c, text, font, size, width):
    words, lines, current = text.split(), [], ""
    for word in words:
        trial = f"{current} {word}".strip()
        if stringWidth(trial, font, size) <= width or not current:
            current = trial
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def paragraph(c, text, x, y, width, size=10, leading=15, color=MUTED, font="Helvetica"):
    c.setFillColor(color)
    c.setFont(font, size)
    for line in wrap(c, text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def page_footer(c, page):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.5)
    c.line(42, 34, W - 42, 34)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7)
    c.drawString(42, 20, "CureVyn Pharmaceuticals")
    c.drawRightString(W - 42, 20, f"{page:02d}")


def product_card(c, item, x, y, width, height, dark=False):
    name, category, description, filename = item
    c.setFillColor(INK if dark else white)
    c.roundRect(x, y, width, height, 3, stroke=0, fill=1)
    c.setFillColor(PORCELAIN if dark else HexColor("#F5F7F5"))
    c.roundRect(x + 12, y + 60, width - 24, height - 72, 2, stroke=0, fill=1)
    image(c, filename, x + 14, y + 62, width - 28, height - 76, "contain")
    c.setFillColor(GOLD if dark else SAGE)
    c.setFont("Helvetica-Bold", 6.6)
    c.setCharSpace(1.1)
    c.drawString(x + 14, y + 43, category.upper())
    c.setCharSpace(0)
    c.setFillColor(PORCELAIN if dark else INK)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(x + 14, y + 27, name)
    c.setFillColor(HexColor("#DCE3DE") if dark else MUTED)
    c.setFont("Helvetica", 7.5)
    c.drawString(x + 14, y + 14, description)


def cover(c):
    c.setFillColor(INK)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    c.setFillColor(HexColor("#2E4750"))
    c.circle(W - 35, H - 10, 195, stroke=0, fill=1)
    c.setStrokeColor(HexColor("#496069"))
    c.setLineWidth(0.6)
    c.circle(W - 35, H - 10, 165, stroke=1, fill=0)
    logo(c, 46, H - 80, inverse=True, scale=1.05)
    label(c, "Portfolio brochure", 47, H - 142, GOLD)
    c.setFillColor(PORCELAIN)
    c.setFont("Times-Bold", 43)
    c.drawString(46, H - 205, "Care that moves")
    c.drawString(46, H - 252, "with purpose.")
    paragraph(c, "A considered portfolio of pharmaceutical and nutraceutical products for everyday healthcare needs.", 48, H - 296, 290, 11, 17, HexColor("#D5DDDA"))
    # Actual pack imagery only - no stock or demo photography.
    c.setFillColor(PORCELAIN)
    c.roundRect(46, 106, W - 92, 202, 3, stroke=0, fill=1)
    image(c, "CureVyn-650.jpeg", 62, 126, 154, 160, "contain")
    image(c, "CureVyn-OvaCare.jpeg", 206, 118, 154, 176, "contain")
    image(c, "CureVyn-DSR.jpeg", 350, 126, 154, 160, "contain")
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 7)
    c.setCharSpace(1.5)
    c.drawCentredString(W / 2, 84, "PHARMACEUTICALS  |  NUTRACEUTICALS  |  PARTNERSHIPS")
    c.setCharSpace(0)
    c.showPage()


def about(c):
    c.setFillColor(PORCELAIN)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    logo(c, 44, H - 65, scale=.9)
    label(c, "About CureVyn", 44, H - 122)
    c.setFillColor(INK)
    c.setFont("Times-Bold", 32)
    c.drawString(44, H - 170, "Healthcare, presented")
    c.drawString(44, H - 207, "with clarity and care.")
    paragraph(c, "CureVyn Pharmaceutical Pvt. Ltd is a quality-focused pharmaceutical brand delivering market-relevant healthcare products across India through trusted distribution.", 44, H - 254, 292, 10.6, 16, MUTED)
    paragraph(c, "Our portfolio brings together pharmaceutical and nutraceutical offerings with a focus on practical market relevance, clear presentation, and dependable support for partners and customers.", 44, H - 333, 292, 10.6, 16, MUTED)

    c.setFillColor(INK)
    c.roundRect(365, H - 408, 186, 317, 3, stroke=0, fill=1)
    image(c, "CureVyn-52.jpeg", 379, H - 306, 158, 195, "contain")
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 7)
    c.setCharSpace(1.25)
    c.drawCentredString(458, H - 335, "A CONSIDERED PORTFOLIO")
    c.setCharSpace(0)
    c.setFillColor(PORCELAIN)
    c.setFont("Helvetica-Bold", 14.5)
    c.drawCentredString(458, H - 364, "Everyday care,")
    c.drawCentredString(458, H - 385, "thoughtfully presented.")

    y = 234
    for number, heading, body in [
        ("01", "Focused portfolio", "Pharmaceutical and nutraceutical product categories for evolving healthcare needs."),
        ("02", "Partner ready", "Clear product presentation for distribution, business, and partnership conversations."),
        ("03", "Quality-led approach", "A responsible, consistent approach to healthcare product communication."),
    ]:
        c.setStrokeColor(LINE)
        c.line(44, y + 42, 551, y + 42)
        c.setFillColor(SAGE)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(44, y + 22, number)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(94, y + 22, heading)
        paragraph(c, body, 257, y + 22, 270, 8.6, 11.5, MUTED)
        y -= 65
    page_footer(c, 2)
    c.showPage()


def core_products(c):
    c.setFillColor(white)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    logo(c, 44, H - 65, scale=.9)
    label(c, "Pharmaceutical portfolio", 44, H - 122)
    c.setFillColor(INK)
    c.setFont("Times-Bold", 31)
    c.drawString(44, H - 170, "Core medicines.")
    paragraph(c, "A focused selection of medicine formats for practical healthcare portfolios. Product presentation is shown from the current CureVyn range.", 44, H - 205, 420, 10.5, 16, MUTED)
    positions = [(44, 370), (306, 370), (44, 126), (306, 126)]
    for item, (x, y) in zip(PRODUCTS, positions):
        product_card(c, item, x, y, 244, 224)
    page_footer(c, 3)
    c.showPage()


def wellness(c):
    c.setFillColor(HexColor("#FBFAF7"))
    c.rect(0, 0, W, H, stroke=0, fill=1)
    logo(c, 44, H - 65, scale=.9)
    label(c, "Nutraceutical portfolio", 44, H - 122)
    c.setFillColor(INK)
    c.setFont("Times-Bold", 31)
    c.drawString(44, H - 170, "Wellness, with intention.")
    paragraph(c, "CureVyn's nutraceutical range is positioned for practical wellness support with clearer category focus and a premium retail-ready presentation.", 44, H - 205, 430, 10.5, 16, MUTED)
    for index, item in enumerate(NUTRACEUTICALS):
        name, category, description, filename = item
        x = 44 if index == 0 else 306
        accent = HexColor("#E7D9D4") if index == 0 else HexColor("#DDE6DF")
        c.setFillColor(white)
        c.roundRect(x, 210, 244, 358, 3, stroke=0, fill=1)
        c.setFillColor(accent)
        c.roundRect(x + 12, 340, 220, 214, 2, stroke=0, fill=1)
        image(c, filename, x + 20, 350, 204, 195, "contain")
        c.setFillColor(SAGE)
        c.setFont("Helvetica-Bold", 7)
        c.setCharSpace(1.25)
        c.drawString(x + 20, 315, category.upper())
        c.setCharSpace(0)
        c.setFillColor(INK)
        c.setFont("Times-Bold", 25)
        c.drawString(x + 20, 278, name)
        paragraph(c, description, x + 20, 250, 195, 9, 13, MUTED)
        c.setStrokeColor(LINE)
        c.line(x + 20, 226, x + 224, 226)
        c.setFillColor(SAGE)
        c.setFont("Helvetica-Bold", 7.4)
        c.drawString(x + 20, 211, "CUREVYN WELLNESS RANGE")
    page_footer(c, 4)
    c.showPage()


def partnership(c):
    c.setFillColor(INK)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    logo(c, 44, H - 65, inverse=True, scale=.9)
    label(c, "How we work", 44, H - 122, GOLD)
    c.setFillColor(PORCELAIN)
    c.setFont("Times-Bold", 33)
    c.drawString(44, H - 170, "A portfolio built for")
    c.drawString(44, H - 208, "the conversations ahead.")
    paragraph(c, "For product, distribution, business, and partnership enquiries, our team helps direct each conversation to the right people.", 44, H - 257, 320, 10.6, 16, HexColor("#D5DDDA"))
    columns = [
        ("Product enquiries", "Discuss the current CureVyn pharmaceutical and wellness portfolio."),
        ("Business enquiries", "Connect on distribution and commercial opportunities."),
        ("Partnership enquiries", "Start a focused conversation with the relevant team."),
    ]
    x = 44
    for heading, body in columns:
        c.setStrokeColor(HexColor("#526971"))
        c.setLineWidth(.6)
        c.line(x, 335, x + 154, 335)
        c.setFillColor(GOLD)
        c.setFont("Helvetica-Bold", 7.2)
        c.setCharSpace(1.2)
        c.drawString(x, 315, heading.upper())
        c.setCharSpace(0)
        paragraph(c, body, x, 290, 142, 9.1, 13, HexColor("#D5DDDA"))
        x += 170
    c.setFillColor(HexColor("#344F57"))
    c.roundRect(44, 82, W - 88, 176, 3, stroke=0, fill=1)
    image(c, "CureVyn-Ibuprophen.jpeg", 75, 95, 180, 150, "contain")
    image(c, "CureVyn-HerVita.jpeg", 335, 95, 170, 150, "contain")
    page_footer(c, 5)
    c.showPage()


def contact(c):
    c.setFillColor(PORCELAIN)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    logo(c, 44, H - 65, scale=.9)
    label(c, "Contact CureVyn", 44, H - 122)
    c.setFillColor(INK)
    c.setFont("Times-Bold", 35)
    c.drawString(44, H - 176, "Start the right")
    c.drawString(44, H - 217, "conversation.")
    paragraph(c, "Whether your enquiry is about a product, distribution, business, or a potential partnership, CureVyn will direct it to the right team.", 44, H - 263, 350, 10.6, 16, MUTED)
    contacts = [
        ("General enquiries", "info@curevyn.com"),
        ("Sales enquiry", "sales@curevyn.com"),
        ("Careers", "careers@curevyn.com"),
    ]
    y = 460
    for heading, email in contacts:
        c.setStrokeColor(LINE)
        c.line(44, y + 29, 364, y + 29)
        c.setFillColor(SAGE)
        c.setFont("Helvetica-Bold", 7)
        c.setCharSpace(1.15)
        c.drawString(44, y + 10, heading.upper())
        c.setCharSpace(0)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 11)
        c.drawRightString(364, y + 9, email)
        y -= 63
    c.setFillColor(INK)
    c.roundRect(397, 178, 154, 404, 3, stroke=0, fill=1)
    image(c, "CureVyn-52.jpeg", 410, 305, 128, 245, "contain")
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 7)
    c.setCharSpace(1.2)
    c.drawCentredString(474, 276, "CUREVYN PHARMACEUTICALS")
    c.setCharSpace(0)
    c.setFillColor(PORCELAIN)
    c.setFont("Times-Bold", 18)
    c.drawCentredString(474, 244, "Care, made")
    c.drawCentredString(474, 222, "considered.")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8)
    c.drawString(44, 90, "curevyn.com")
    page_footer(c, 6)
    c.showPage()


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)
    c.setTitle("CureVyn Pharmaceuticals Brochure")
    c.setAuthor("CureVyn Pharmaceuticals")
    cover(c)
    about(c)
    core_products(c)
    wellness(c)
    partnership(c)
    contact(c)
    c.save()
    print(OUT)


if __name__ == "__main__":
    main()
