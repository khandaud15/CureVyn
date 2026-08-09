function BrandLogo({ inverse = false }) {
  return (
    <span className={`brand-logo ${inverse ? 'brand-logo--inverse' : ''}`}>
      <svg className="brand-logo__mark" viewBox="0 0 42 42" aria-hidden="true">
        <path d="M21 2.5c10.22 0 18.5 8.28 18.5 18.5S31.22 39.5 21 39.5 2.5 31.22 2.5 21 10.78 2.5 21 2.5Z" />
        <path className="brand-logo__leaf" d="M27.8 11.9c-7.8.28-12.5 4.26-12.5 10.6 0 3.61 2.25 6.37 5.97 6.37 4.75 0 7.2-3.74 7.05-8.62-.04-1.19-.2-2.46-.52-3.76ZM16.2 27.13c2.55-3.93 5.52-7.01 10.58-10.03" />
      </svg>
      <span className="brand-logo__type">
        <span>Cure<span>Vyn</span></span>
        <small>Pharmaceuticals</small>
      </span>
    </span>
  );
}

export default BrandLogo;
