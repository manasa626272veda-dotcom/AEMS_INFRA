import {Icon} from './icons.jsx';
// React page compositions preserve the approved AEMS content and layout.
import React from 'react';
import {products} from './data.js';
import {ProductShowcase,ServiceExperience,Catalogue,EnquiryForm,Solutions,EquipmentDiscovery,FacilityWorld,ProductCard,PhotoButton} from './components.jsx';
export function PageMarkup({route}){switch(route){
case "about.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>About AEMS</span></div><div className="eyebrow">About AEMS</div><h1>Engineering with purpose.</h1><p>Integrated engineering solutions, a qualified team and a shared commitment to quality in every environment.</p></div></section><section className="section" data-section={0}><div className="wrap about-strip"><div className="technical"><h3>About <span>AEMS</span></h3>
        <p>AEMS as the name suggests Alternative and Energy Management Solutions, and also in providing complete MEP solutions, especially in the field of Pharmaceutical, Healthcare, Biotechnology and Food Processing across the globe. <span>"Safety, Improvement, Morals"</span> are core values of the organization.</p>
        <p>With this strategic vision we provide the latest technology, Energy efficient and create customized solutions as perthe system requirements. With "Safety, Improvement and Morals" we thrive for perfection to focus on quality in our entire product range.</p>
        <p>With our qualified engineering team, skilled professionals, and our rich experience in projects execution, we are committed to provide high quality of service to ensure their total satisfaction every time. AEMS executed several projects with a focus on Clean Rooms, HVAC, Electrical and Utility Piping. AEMS is committed to provide affordable solutions assuring maximum levels of customer satisfaction, timely completion, assured quality and value for investments.</p>
        <p>AEMS specialised in providing services related to Clean Room Technologies, HVAC Projects, Electrical Systems, Utility Piping, Facility Maintenance Services and Energy Efficient Retrofit Solutions without much investment and shutdown time in existing HVAC Systems.</p>
        <p>Quality is the main integrity of the business. So the company has always been on <span>"customer first, quality first, credibility first"</span>. We are committed to give our customers the highest quality of service and make sure their total satisfaction with a diversified workforce that reflects our core business.</p></div><div className="about-image"><PhotoButton src={"assets/img/about-us-img.png"} alt={"AEMS clean room installation"} cover={true} /><div className="image-overlay">Safety. Improvement. Morals.</div></div></div><div className="wrap mission-grid"><div><div className="eyebrow">Our vision</div><h3>Quality, first time. Every time.</h3><p>We are committed to providing our customers the highest quality of service and ensuring their total satisfaction.</p></div><div><div className="eyebrow">Our mission</div><h3>Invest in people. Improve continuously.</h3><p>Develop a diverse workforce and invest in training, development and technology to provide the best possible service to our customers.</p></div></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "affiliations.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Our affiliations</span></div><div className="eyebrow">Our affiliations</div><h1>Connected to our industry.</h1><p>The affiliations featured by AEMS Infra.</p></div></section><section className="section" data-section={0}><div className="wrap"><div className="logo-gallery"><div className="logo-tile"><img src="assets/img/affiliations-1.png" alt="Affiliation logo 1 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/affiliations-2.png" alt="Affiliation logo 2 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/affiliations-3.png" alt="Affiliation logo 3 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/affiliations-4.png" alt="Affiliation logo 4 from the AEMS portfolio" loading="lazy" /></div></div></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "airhandlingunit.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>Air handling unit</h1><p>Air filtration and conditioning for your facility.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="airhandlingunit.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/home-ahu.png"} alt={"Air handling unit"} cover={false} /></div><a className="button " href="contact.html?product=Air%20handling%20unit">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="">Clean room panels</a><a href="galvanizedironCR.html" className="">GI clean room partitions</a><a href="cleanroomdoors.html" className="">Clean room doors</a><a href="horizontallaminarflow.html" className="">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="">Vertical laminar flow</a><a href="reverselaminarflow.html" className="">Reverse laminar flow</a><a href="staticpassbox.html" className="">Static pass box</a><a href="dynamicpassbox.html" className="">Dynamic pass box</a><a href="airshower.html" className="">Air shower</a><a href="biosafetycabinet.html" className="">Biosafety cabinet</a><a href="labfurniture.html" className="">Laboratory furniture</a><a href="airhandlingunit.html" className="current">Air handling unit</a><a href="hvacsystems.html" className="">HVAC systems</a><a href="ssfurnitures.html" className="">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>Air Handling Unit (AHU)</h3>
        <p><strong>Air Handling Unit (AHU)</strong> also known as Air handlers are used to supply and circulate air around a building, or to extract stale air as part of a building's Heating, Ventilating and Air Conditioning (HVAC) system</p>
        <p>Basically, an Air Handling Unit system includes a large insulated metal box that contains a fan, heating and/or cooling elements, filters, sound attenuators and dampers. In most cases, the AHU is connected to air distribution ductwork; alternatively, the AHU can be open to the space it serves.</p>
        <p>Supply air passing through the AHU is filtered and is either heated or cooled, depending on specified duty and the ambient weather conditions. In some buildings, Air Handling Units are used only to supply fresh air for ventilation and extract stale air.</p>
        <p>For heating or cooling, AHUs may be connected to central plant such as boilers or chillers, receiving hot or chilled water for heat exchange with the incoming air. Alternatively, heating or cooling may be provided by electric heating elements or direct expansion refrigeration units built into the air handler.</p>
        <p>When AHU systems are used to extract stale air from the building, a controlled proportion of this air may be recirculated to avoid having to condition all supplied air. AHUs can also incorporate heat recovery mechanisms to extract heat from the air being expelled and use it to heat incoming supply air.</p>
        <p>Air Handling Units vary considerably in size, capacity and complexity, depending on the job they are designed to perform.</p><div className="technical-gallery"><PhotoButton src={"assets/img/air-h-u.png"} alt={"Air handling unit — additional product illustration"} cover={false} /></div><div className="detail-actions"><a className="button " href="contact.html?product=Air%20handling%20unit">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "airshower.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>Air shower</h1><p>Personnel decontamination before clean room entry.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="airshower.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/home-airshower.png"} alt={"Air shower"} cover={false} /></div><a className="button " href="contact.html?product=Air%20shower">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="">Clean room panels</a><a href="galvanizedironCR.html" className="">GI clean room partitions</a><a href="cleanroomdoors.html" className="">Clean room doors</a><a href="horizontallaminarflow.html" className="">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="">Vertical laminar flow</a><a href="reverselaminarflow.html" className="">Reverse laminar flow</a><a href="staticpassbox.html" className="">Static pass box</a><a href="dynamicpassbox.html" className="">Dynamic pass box</a><a href="airshower.html" className="current">Air shower</a><a href="biosafetycabinet.html" className="">Biosafety cabinet</a><a href="labfurniture.html" className="">Laboratory furniture</a><a href="airhandlingunit.html" className="">Air handling unit</a><a href="hvacsystems.html" className="">HVAC systems</a><a href="ssfurnitures.html" className="">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>Air Shower</h3>
        <p>We supply best quality with high performance Air Shower, which is widely appreciated for its superior quality and performance. The Air Shower is basically used to supply class 100 HEPA filtered air at maximum velocity to remove impurities from the clean room. Based on their high efficiency and easy functioning</p>
        <ul>
          <h3>Specifications</h3>
          <li>Two Stage filtration</li>
          <li>EU6 - Prefilter (95% down to 5 micron) for return air &amp; fresh air intake</li>
          <li>EU14 - HEPA Filter (99.999% down to 0.3 micron) at supply position</li>
          <li>SS 304 doors with double walled flush glass view panels and door closer</li>
          <li>Properly balanced Motor-blowers with suspension arrangement to minimize the noise level</li>
          <li>Differential Pressure Gauge : 1 No.</li>
          <li>ON/OFF Switches</li>
          <li>DOP Test Port</li>
          <li>5/15 Amp Switch Socket for external equipment</li>
          <li>Control Systems ensuring that both the doors cannot be opened at the same time and will be locked when the air flow is on.</li>
          <li>Timer for setting Air Shower : settable from 30 seconds to 5 minutes</li>
          <li>Emergency stop button</li>
          <li>Straight Entry - Straight Exit / 900 Door Opening automatically as well as manually</li>
          <h3>Used for :</h3>
          <li>Blowing away dust and dirt that comes with people and object</li>
        </ul>
        <h3>Dimensions</h3>
        <div className="table-scroll" tabIndex={0} role="region" aria-label="Technical specifications. Scroll horizontally to see all columns."><table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Work Area Dimension <br />(L x W x H)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LCAT- AS--001</td>
                <td>900 x 900 x 2000 MM</td>
              </tr>
              <tr>
                <td>LCAT- AS--002</td>
                <td>900 x 1200 x 2000 MM</td>
              </tr>
            </tbody>
          </table></div>
        <ul>
          <h3>Operating Conditions</h3>
          <li>Air cleanliness : ISO Class 5 (ISO 14644-1:1999 (E))</li>
          <li>Air Velocities : 18 - 20 mps</li>
          <li>Vibration Level : Minimum</li>
          <li>Power Supply : 415V AC 3-Ø 50HZ</li>
        </ul><div className="technical-gallery"><PhotoButton src={"assets/img/airshower.png"} alt={"Air shower — additional product illustration"} cover={false} /></div><div className="detail-actions"><a className="button " href="contact.html?product=Air%20shower">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "biosafetycabinet.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>Biosafety cabinet</h1><p>Cabinets for laboratory containment applications.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="biosafetycabinet.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/bio-safety-cabinet.png"} alt={"Biosafety cabinet"} cover={false} /></div><a className="button " href="contact.html?product=Biosafety%20cabinet">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="">Clean room panels</a><a href="galvanizedironCR.html" className="">GI clean room partitions</a><a href="cleanroomdoors.html" className="">Clean room doors</a><a href="horizontallaminarflow.html" className="">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="">Vertical laminar flow</a><a href="reverselaminarflow.html" className="">Reverse laminar flow</a><a href="staticpassbox.html" className="">Static pass box</a><a href="dynamicpassbox.html" className="">Dynamic pass box</a><a href="airshower.html" className="">Air shower</a><a href="biosafetycabinet.html" className="current">Biosafety cabinet</a><a href="labfurniture.html" className="">Laboratory furniture</a><a href="airhandlingunit.html" className="">Air handling unit</a><a href="hvacsystems.html" className="">HVAC systems</a><a href="ssfurnitures.html" className="">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>Bio Safety Cabin</h3>
        <p>Bio-safety cabinets are designed to provide personnel, environmental and product protection. Air flow is drawn around the operator into the front grille of the cabinet which provides personnel protection. Additionally, the downward laminar flow of HEPA-filtered air provides product protection by minimizing the chance of cross-contamination along the work surface of the cabinet. Because cabinet air passes through the exhaust HEPA filter, it is contaminant-free (environmental protection). All Class II cabinets are designed for work involving microorganisms assigned to bio safety levels 1, 2 and 3. Class II cabinets provide the microbe-free work environment necessary for cell culture propagation, and also may be used for the formulation of non-volatile antineoplastic or hemotherapeutic drugs. Bio safety cabinets are available in powder coated Galvanized Steel, SS 304 / SS 316 or a combination of both.</p>
        <ul>
          <h3>Specifications</h3>
          <li>Two stage filtration- EU6 and EU 14</li>
          <li>Double walled flushed Glass Side Panels</li>
          <li>Sealed Fluorescent Lights with Milky White Diffuser</li>
          <li>Clean Down Timer with Operation HOLD indicator</li>
          <li>1-piece fully openable sliding toughened glass front door with counterweight arrangement</li>
          <li>Alarm triggers in case front door is raised more than 8</li>
        </ul><div className="technical-gallery" /><div className="detail-actions"><a className="button " href="contact.html?product=Biosafety%20cabinet">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "cleanroomdoors.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>Clean room doors</h1><p>Doors designed for modular clean room applications.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="cleanroomdoors.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/cleanroomdoors.png"} alt={"Clean room doors"} cover={false} /></div><a className="button " href="contact.html?product=Clean%20room%20doors">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="">Clean room panels</a><a href="galvanizedironCR.html" className="">GI clean room partitions</a><a href="cleanroomdoors.html" className="current">Clean room doors</a><a href="horizontallaminarflow.html" className="">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="">Vertical laminar flow</a><a href="reverselaminarflow.html" className="">Reverse laminar flow</a><a href="staticpassbox.html" className="">Static pass box</a><a href="dynamicpassbox.html" className="">Dynamic pass box</a><a href="airshower.html" className="">Air shower</a><a href="biosafetycabinet.html" className="">Biosafety cabinet</a><a href="labfurniture.html" className="">Laboratory furniture</a><a href="airhandlingunit.html" className="">Air handling unit</a><a href="hvacsystems.html" className="">HVAC systems</a><a href="ssfurnitures.html" className="">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>Clean Room Doors</h3>
        <p>We are enlisted as one of the foremost Clean Room Doors Manufacturers and Suppliers based from Hyderabad in India. Made using galvanized steel &amp; Stainless steel the Clean Room Doors offered by us are highly praised in the markets. These doors can be tailor made to suit the varied requirements of the esteemed clients. Available in different specifications, Clean Room Doors are widely acknowledged by the customers</p>
        <ul>
          <h3>Specifications</h3>
          <li>Single leaf and double leaf frames</li>
          <li>Removable over panels</li>
          <li>Finishing in primer or epoxy polyester powder coating</li>
          <li>Ability of accepting glazing in many configurations with louvers and a wide range of hardware</li>
          <h3>Metal Doorsteps Available In:</h3>
          <li>Sizes up to 2300mm</li>
          <li>Height : 3000mm</li>
        </ul><div className="technical-gallery" /><div className="detail-actions"><a className="button " href="contact.html?product=Clean%20room%20doors">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "cleanroomequipment.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Engineering solutions</span></div><div className="eyebrow">Engineering solutions</div><h1>Clean room solutions</h1><p>Modular environments, engineered around the precision your process demands.</p></div></section><ServiceExperience route={"cleanroomequipment.html"} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/about-us-img.png"} alt={"Clean room solutions"} cover={false} /></div><a className="button " href="contact.html?product=Clean%20room%20solutions">Enquire about this service<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="service.html">All solutions <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Our solutions</h3><a href="cleanroomequipment.html" className="current">Clean room solutions</a><a href="hvacservices.html" className="">HVAC &amp; air systems</a><a href="mepcontractors.html" className="">MEP contracting</a><a href="validations.html" className="">Testing &amp; validation</a><a href="facilityengservices.html" className="">Facility maintenance</a></div></aside><article className="technical" id="service-details"><h3>Clean Room Equipment Suppliers</h3>
        <p>AEMS is pleased to introduce as one of the superior Clean Room Equipment Suppliers. We provide complete turnkey solutions for a greater clean room environment. We have a hand full of experience and complete knowledge about the designing, manufacturing and supply of clean room equipment for various industries such as pharmaceuticals, hospitals, research and development laboratories, food and processing and more. We follow the latest guidelines to meet the standards of WHO. The benefit to consumers as one stop for all the equipment of a clean room is accessible at AEMS. This is very helpful to finish of projects short period. Our clean room equipment controls the pollutants and always makes the room have secure and sterilized environment.</p>
        <h3>Clean Room Panels Suppliers</h3>
        <p>We are determined to offer higher quality Clean Room Panels that have a decrease in labour requirement for constructing a site. We design clean room panels as per client’s specifications. Our team blends with industry experts and they have the ability to understand client’s requirements, using high-grade material for making products is our custom and these products are faced many qualified tests before exporting like many specifications made us one of the top-notch Clean Room Panels Suppliers</p>
        <ul>
          <h3>Features of AEMS Clean room equipment:</h3>
          <li> Robust structure</li>
          <li> Easy to install, operate and service</li>
          <li> Low noise and vibration nil</li>
          <li> Temperature modulation</li>
          <li> Fireproof constructions</li>
          <li> Long lasting performance</li>
          <li> Maintenance free</li>
          <li> High Illumination Level</li>
          <li> Resistant to corrosion</li>
        </ul><div className="technical-gallery" /><div className="detail-actions"><a className="button " href="contact.html?product=Clean%20room%20solutions">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "cleanroompanels.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>Clean room panels</h1><p>Modular panels with configurable finishes and infill materials.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="cleanroompanels.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/home-crp.png"} alt={"Clean room panels"} cover={false} /></div><a className="button " href="contact.html?product=Clean%20room%20panels">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="current">Clean room panels</a><a href="galvanizedironCR.html" className="">GI clean room partitions</a><a href="cleanroomdoors.html" className="">Clean room doors</a><a href="horizontallaminarflow.html" className="">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="">Vertical laminar flow</a><a href="reverselaminarflow.html" className="">Reverse laminar flow</a><a href="staticpassbox.html" className="">Static pass box</a><a href="dynamicpassbox.html" className="">Dynamic pass box</a><a href="airshower.html" className="">Air shower</a><a href="biosafetycabinet.html" className="">Biosafety cabinet</a><a href="labfurniture.html" className="">Laboratory furniture</a><a href="airhandlingunit.html" className="">Air handling unit</a><a href="hvacsystems.html" className="">HVAC systems</a><a href="ssfurnitures.html" className="">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>Clean Room Modular Panels</h3>
        <p>AEMS clean rooms are unique in their design of Modular Panel System specifically designed fo suit all applications to meet industry requirements,while maintaining modular flexibility. AEMS provides a complete range of clean room Modular Panels and Doors with progressive and non progressive designs to suite your needs. AEMS takes very much care in designing wide range of options in panel selections.The ceilings are designed to fit every requirement with quality standards, which are of suspension type witlh walkable or non-walkable designs.</p>
        <p>The Panels ore considered more important in clean rooms.Our panels and ceilings are inert, non particle shedding,forming part of the clean room. AEMS wall panels are manufactured in standard sizes ,and can also be customized in accordance with FDA validation procedures and international standards.</p>
        <ul>
          <h3>GENERAL SPECIFICATIONS</h3>
          <li><span>Panel Thickness:</span> 40,50,80 and 11OOmm</li>
          <li><span>Panel Width:</span> 12OOmm</li>
          <li><span>Infi Materials:</span> PUF/PapernHoneycomb | EPS</li>
          <li><span>Sheet Thickness:</span> 0.6/0.8/ 1.0mm</li>
          <li><span>Sheet Finish:</span> PPGI/PCGI/SS</li>
          <li><span>Panel Connection:</span> Aluminium/GI interconnecting profile</li>
          <li><span>Glazing:</span> Flush 5mm toughened glass on both sides</li>
          <li><span>Door:</span> PCGI Single / Double steellock formed construction</li>
          <li><span>Coving:</span> RSO, R70 &amp; R90 alumininum snap fit</li>
        </ul><div className="technical-gallery"><PhotoButton src={"assets/img/about-us-img.png"} alt={"Clean room panels — additional product illustration"} cover={false} /></div><div className="detail-actions"><a className="button " href="contact.html?product=Clean%20room%20panels">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "clients.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Our clients</span></div><div className="eyebrow">Our clients</div><h1>Relationships built<br />through engineering.</h1><p>The organisations featured on the AEMS client portfolio.</p></div></section><section className="section" data-section={0}><div className="wrap"><div className="logo-gallery"><div className="logo-tile"><img src="assets/img/c1.png" alt="Client logo 1 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c2.png" alt="Client logo 2 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c3.png" alt="Client logo 3 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c4.png" alt="Client logo 4 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c5.png" alt="Client logo 5 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c6.png" alt="Client logo 6 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c7.png" alt="Client logo 7 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c8.png" alt="Client logo 8 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c9.png" alt="Client logo 9 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c10.png" alt="Client logo 10 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c11.png" alt="Client logo 11 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c12.png" alt="Client logo 12 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c13.png" alt="Client logo 13 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c14.png" alt="Client logo 14 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c15.png" alt="Client logo 15 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c16.png" alt="Client logo 16 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c17.png" alt="Client logo 17 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c18.png" alt="Client logo 18 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c19.png" alt="Client logo 19 from the AEMS portfolio" loading="lazy" /></div><div className="logo-tile"><img src="assets/img/c20.png" alt="Client logo 20 from the AEMS portfolio" loading="lazy" /></div></div></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "contact.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Contact AEMS</span></div><div className="eyebrow">Contact AEMS</div><h1>Your next project<br />starts with a conversation.</h1><p>Tell us what you’re building. Our engineering team can help with your clean room, HVAC, MEP and equipment requirements.</p></div></section><section className="section" data-section={0}><div className="wrap contact-grid"><div className="contact-info"><div className="eyebrow">Let’s connect</div><h2>Built around<br />your requirements.</h2><div className="contact-block"><small>Call our team</small><a href="tel:+919000230419">+91 90002 30419 ↗</a><a href="tel:04048586464">040-48586464 ↗</a></div><div className="contact-block"><small>Email us</small><a href="mailto:info@aemsinfra.com">info@aemsinfra.com ↗</a></div><div className="contact-block"><small>Visit our office</small><p>#8-2-611/3, Flat No. 104, First Floor,<br />Farhat Afza Building, beside Shankarlal &amp; Sons,<br />Road No. 10, Banjara Hills,<br />Hyderabad 500034, Telangana, India.</p></div><div className="map-card"><a href="https://www.google.com/maps/search/?api=1&query=Farhat+Afza+Building+Road+10+Banjara+Hills+Hyderabad" target="_blank" rel="noopener">Find our office on Google Maps ↗</a></div></div><EnquiryForm /></div></section>
</div>
);
case "dynamicpassbox.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>Dynamic pass box</h1><p>Filtered airflow for clean room material transfer.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="dynamicpassbox.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/home-passbox.png"} alt={"Dynamic pass box"} cover={false} /></div><a className="button " href="contact.html?product=Dynamic%20pass%20box">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="">Clean room panels</a><a href="galvanizedironCR.html" className="">GI clean room partitions</a><a href="cleanroomdoors.html" className="">Clean room doors</a><a href="horizontallaminarflow.html" className="">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="">Vertical laminar flow</a><a href="reverselaminarflow.html" className="">Reverse laminar flow</a><a href="staticpassbox.html" className="">Static pass box</a><a href="dynamicpassbox.html" className="current">Dynamic pass box</a><a href="airshower.html" className="">Air shower</a><a href="biosafetycabinet.html" className="">Biosafety cabinet</a><a href="labfurniture.html" className="">Laboratory furniture</a><a href="airhandlingunit.html" className="">Air handling unit</a><a href="hvacsystems.html" className="">HVAC systems</a><a href="ssfurnitures.html" className="">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>Dynamic Pass Box</h3>
        <p>AEMS is one of the best Dynamic Pass Box Manufacturers, Supplier. Our precision-engineered Dynamic Pass Box assists in transfer of materials driven through a controlled environment but without much personnel movement. Furthermore, this box helps in prevention of contaminants entrance either in the clean room or between various classified areas. Dynamic Pass Box that we deliver in the market is accessible at most economical prices.</p>
        <ul>
          <h3>Specifications</h3>
          <li>Two Stage filtration</li>
          <li>Available in powder coated Mild Steel, SS 304 / SS 316/ SS 316L or a combination of both</li>
          <li>EU6 - Prefilter (95% down to 5 micron)</li>
          <li>EU14 - HEPA Filter - Supply (99.999% down to 0.3 micron)</li>
          <li>Dynamically balanced Motor-blower facilitated with suspension arrangement to minimize the noise level</li>
          <li>Double walled flush glass view panels provided with doors</li>
          <li>SS Handles and SS hinges</li>
          <li>Internal covings for easy cleaning</li>
          <li>Electro-magnetic Interlocking</li>
          <li>Indicator on either side</li>
          <li>Door Release Switch on either side</li>
          <li>Differential Pressure Gauge : 1 No.</li>
          <li>On / Off Switch for Motor</li>
          <li>DOP Test Port</li>
          <h3>Accessories Made Available:</h3>
          <li>Mechanical Interlocking</li>
          <li>U. V. Light with Hour Meter with interlocking arrangement to put-off U.V. Light if any of the door opens</li>
          <li>Floor mounted construction with three side wall structure &amp; Door Drop Seal</li>
          <li>Support stand for mounting the pass box</li>
          <li>Flange for filling the gap between the pass box and the clean room wall</li>
          <li>Audio / Visual alarm for blower tripping with Fault Acknowledgement &amp; Reset Switch</li>
          <li>Clean Down Timer with Operation Hold Indicator &amp; interlocking to put on fluorescent lights only after clean down time over</li>
          <li>Fluorescent light with interlocking arrangement to put on light when the doors are in closed position</li>
        </ul>
        <h3>Dimensions</h3>
        <div className="table-scroll" tabIndex={0} role="region" aria-label="Technical specifications. Scroll horizontally to see all columns."><table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Work Area Dimension <br />(L x W x H)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LCAT- DPB-18-18-18</td>
                <td>450 x 450 x 450 mm</td>
              </tr>
              <tr>
                <td>LCAT- DPB-24-24-24</td>
                <td>610 x 610 x 610 mm</td>
              </tr>
            </tbody>
          </table></div>
        <ul>
          <h3>Operating Conditions</h3>
          <li>Air cleanliness : ISO Class 5 (ISO 14644-1:1999 (E))</li>
          <li>Air Velocities : 0.45 ± 0.05 mps</li>
          <li>Air Flow Vertical - Recirculatory</li>
          <li>Noise Level : Less than 67 dB</li>
          <li>Vibration Level : Minimum</li>
          <li>Power Supply : 230V AC 1-Ø 50HZ</li>
        </ul><div className="technical-gallery"><PhotoButton src={"assets/img/dynamicpassbox.png"} alt={"Dynamic pass box — additional product illustration"} cover={false} /></div><div className="detail-actions"><a className="button " href="contact.html?product=Dynamic%20pass%20box">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "facilityengservices.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Engineering solutions</span></div><div className="eyebrow">Engineering solutions</div><h1>Facility maintenance</h1><p>Keep critical equipment and utilities operating with dedicated engineering support.</p></div></section><ServiceExperience route={"facilityengservices.html"} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/facility.png"} alt={"Facility maintenance"} cover={false} /></div><a className="button " href="contact.html?product=Facility%20maintenance">Enquire about this service<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="service.html">All solutions <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Our solutions</h3><a href="cleanroomequipment.html" className="">Clean room solutions</a><a href="hvacservices.html" className="">HVAC &amp; air systems</a><a href="mepcontractors.html" className="">MEP contracting</a><a href="validations.html" className="">Testing &amp; validation</a><a href="facilityengservices.html" className="current">Facility maintenance</a></div></aside><article className="technical" id="service-details"><h3>Facility Engineering Maintenance Services</h3>
        <p>We understand the needs of the sector, both pharmaceutical and healthcare sectors. We provide the support manpower for the following services:</p>
        <p>Operation and maintenance of utility equipments like HVAC Systems, Water treatment plants, Dust collection systems.</p>
        <p>Maintenance of process equipments like RMG, FBD, Tablet Compression machines, Capsule filling machines, Coating machines and Packing machines etc.</p>
        <p>Preparation of SOP’s, PPM Schedules, Calibration schedules etc</p>
        <p>Preparation and executing the equipment qualifications like: DQ,IQ, OQ and PQ as per USFDA/WHO/cGMP</p>
        <p>Pre-audit &amp; Internal Checks</p>
        <p>Training on Clean rooms, HVAC systems and Documentation as per current good manufacturing process.</p><div className="technical-gallery" /><div className="detail-actions"><a className="button " href="contact.html?product=Facility%20maintenance">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "galvanizedironCR.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>GI clean room partitions</h1><p>Galvanized iron partitions for controlled environments.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="galvanizedironCR.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/galvanised.png"} alt={"GI clean room partitions"} cover={false} /></div><a className="button " href="contact.html?product=GI%20clean%20room%20partitions">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="">Clean room panels</a><a href="galvanizedironCR.html" className="current">GI clean room partitions</a><a href="cleanroomdoors.html" className="">Clean room doors</a><a href="horizontallaminarflow.html" className="">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="">Vertical laminar flow</a><a href="reverselaminarflow.html" className="">Reverse laminar flow</a><a href="staticpassbox.html" className="">Static pass box</a><a href="dynamicpassbox.html" className="">Dynamic pass box</a><a href="airshower.html" className="">Air shower</a><a href="biosafetycabinet.html" className="">Biosafety cabinet</a><a href="labfurniture.html" className="">Laboratory furniture</a><a href="airhandlingunit.html" className="">Air handling unit</a><a href="hvacsystems.html" className="">HVAC systems</a><a href="ssfurnitures.html" className="">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>Galvanized Iron Clean Room Partitions</h3>
        <p>AEMS Modular Clean Room Systems interface with floors, ceilings, and mechanical components to provide a world class -clean room environment with effective control of airflow, pressure, temperature, humidity and filtration. They can be customized to match specific requirements and provide a cost-effective alternative to conventional construction without compromising quality, durability or efficiency. Modular clean rooms also utilize a flexible design that allows for fast, easy installation in a system that can be expanded or relocated as need be</p>
        <ul>
          <h3>Advantages of AEMS Modular Clean Rooms</h3>
          <li>CGMP certified clean room design</li>
          <li>Full compatibility with chemicals used for cleaning and sanitizing</li>
          <li>Easy clean room installation</li>
          <li>State-of-the-art clean room technology</li>
          <li>Flush surfaces everywhere!</li>
          <li>Scratch-resistant materials</li>
          <li>Easy to modify during wall installation</li>
          <li>Wall system suitable for ISO 5 (class 100) to ISO 8 (Class 100,000)</li>
        </ul>
        <h3>Modular Wall Panels</h3>
        <p>AEMS Modular Wall panels are made out of Double Skin Panels of PPGI (Pre-coated Gl) both sides with 0.6 to 0.8 mm as standard thickness. The wall panels are of 1200 mm as standard width. Panel Thickness varies from 50mm / 60mm / 80mm / 100mm with provision for PVC conduits for Electrical cables and panels of 80mm/100mm are specially designed to carry return Air Ducts / Built in Risers. Panel height can be adjusted to 4000mm with provision for stackable panels.</p>
        <h3>Modular Ceiling Panels</h3>
        <p>AEMS Modular Ceiling panels are made up of 50mm / 60mm thickness depending upon the type of application. Ceiling panels are mounted with specially designed suspension members and linkages for every application. Walkable &amp; Non Walkable ceiling panels are made as per client's requirement with specially designed stiffening systems for walkable load bearing ceilings.</p>
        <h3>Insulation Material</h3>
        <p>This foam is injected under high Pressure with Precise Ratio &amp; Proportion to maintain the PUF density between 38 to 42 Kg/m3. OR Bonded Mineral wool or Rockwool insulation of various thicknesses ranging from 50mm to 100mm is sandwiched between the outer &amp; Inner skins and is properly sealed from the exterior by Aluminium or G.I. Profiles.</p>
        <h3>Covings</h3>
        <p>All the internal &amp; external corners of Modular Wall panel systems are covered with Aluminium covings having special Male &amp; Female profiles with locking system and are fixed from Wall Panel to Floor, Ceiling to Wall panel &amp; Wall to Wall panel. Aluminium covings are powder coated in various colours as per client's requirement.</p><div className="technical-gallery" /><div className="detail-actions"><a className="button " href="contact.html?product=GI%20clean%20room%20partitions">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "horizontallaminarflow.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>Horizontal laminar flow</h1><p>Horizontal unidirectional airflow for product protection.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="horizontallaminarflow.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/horizontal-l-f.png"} alt={"Horizontal laminar flow"} cover={false} /></div><a className="button " href="contact.html?product=Horizontal%20laminar%20flow">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="">Clean room panels</a><a href="galvanizedironCR.html" className="">GI clean room partitions</a><a href="cleanroomdoors.html" className="">Clean room doors</a><a href="horizontallaminarflow.html" className="current">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="">Vertical laminar flow</a><a href="reverselaminarflow.html" className="">Reverse laminar flow</a><a href="staticpassbox.html" className="">Static pass box</a><a href="dynamicpassbox.html" className="">Dynamic pass box</a><a href="airshower.html" className="">Air shower</a><a href="biosafetycabinet.html" className="">Biosafety cabinet</a><a href="labfurniture.html" className="">Laboratory furniture</a><a href="airhandlingunit.html" className="">Air handling unit</a><a href="hvacsystems.html" className="">HVAC systems</a><a href="ssfurnitures.html" className="">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>Horizontal Laminar Air Flow Unit</h3>
        <p>We make quality Horizontal Laminar Air Flow Unit. Horizontal Laminar Air Flow Unit that we deliver in the market is known for its robust construction, smooth functioning and unsurpassable performance. Manufactured using high grade materials, our Horizontal Laminar Air Flow Units are high on demand in the market.</p>
        <ul>
          <h3>Specifications</h3>
          <li>High product protection by provision of ISO Class 5 particle free work area</li>
          <li>Able enough to handle critical process</li>
          <li>Protection for the samples and processes</li>
          <li>The work area is incessantly supplied with positive pressure HEPA filtered horizontal air flow</li>
          <li>Horizontal unidirectional airflow peed prevents contamination from operator and environment to work area</li>
          <li>Laminarity of the flow handles cross contamination between the items in the working space</li>
          <li>Two Stage filtration</li>
          <li>Made available in powder coated Mild Steel and SS 304 / SS 316</li>
          <li>EU6 - Prefilter (95% down to 5 micron)</li>
          <li>EU14 - HEPA Filter - Supply (99.999% down to 0.3 micron) Dynamically balanced Motor-blower provided with suspension arrangement to minimize the noise level</li>
          <li>Differential Pressure Gauge : 1 No</li>
          <li>On / Off Switch for Motor</li>
          <li>SS 304 work table with due reinforcement</li>
          <li>Polycarbonate side panels/Toughened glass</li>
          <li>Fluorescent Light with milky white diffuser (250 Lux)</li>
          <li>5/15 Amp single-phase switch socket for external equipment</li>
          <li>DOP Test Port</li>
          <h3>Suitable For:</h3>
          <p>For handling of non hazardous products:</p>
          <li>Sensible to dust</li>
          <li>Susceptible to contamination like :</li>
          <li>Inject able medicines</li>
          <li>Cell and tissue cultures</li>
          <li>Food sample preparation for sterility testing</li>
          <li>Sterile packaging</li>
          <li>I.V. pharmacy preparations</li>
          <li>Micromechanics</li>
          <li>Optics</li>
          <li>electronics</li>
          <h3>Options and Accessories :</h3>
          <p>A wide range of configurations to suit any containment application:</p>
          <li>Front doors (hinged/pneumatic cylinder)</li>
          <li>U. V. Light with Hour Meter</li>
          <li>Air / Gas Cock</li>
          <li>Explosion proof electrics for Flame-proof applications</li>
          <li>Clean Down Timer with Operation Hold Indicator &amp; interlocking to put on fluorescent lights only after clean down time over</li>
          <li>Audio / Visual alarm for blower tripping with Fault Acknowledgement &amp; Reset Switch</li>
          <li>1 - Piece / foldable polycarbonate front door</li>
          <li>Digital Pressure of Minihelic Gauge</li>
        </ul>
        <h3>Dimensions</h3>
        <div className="table-scroll" tabIndex={0} role="region" aria-label="Technical specifications. Scroll horizontally to see all columns."><table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Work Area Dimension <br />(L x W x H)</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LCAT- HF-72-24-24</td>
                <td>1220 x 610 MM</td>
                <td>915 x 610 x 610 MM</td>
              </tr>
              <tr>
                <td>LCAT- HF-48-30-30</td>
                <td>915 x 610 MM</td>
                <td>1220 x 610 x 610 MM</td>
              </tr>
              <tr>
                <td>LCAT- HF-48-24-24</td>
                <td>1220 x 760 MM</td>
                <td>1220 x 610 x 760 MM</td>
              </tr>
              <tr>
                <td>LCAT- HF-48-24-30</td>
                <td>1220 x 760 MM</td>
                <td>1220 x 760 x 760 MM</td>
              </tr>
              <tr>
                <td>LCAT- HF-36-24-24</td>
                <td>1830 x 610 MM</td>
                <td>1830 x 610 x 610 MM</td>
              </tr>
            </tbody>
          </table></div>
        <ul>
          <h3>Operating Conditions</h3>
          <li>Air cleanliness : ISO Class 5 (ISO 14644-1:1999 (E))</li>
          <li>Air Velocities : 0.45 ± 0.05 mps</li>
          <li>Air Flow : Horizontal</li>
          <li>Noise Level : Less than 67 dB</li>
          <li>Vibration Level : Minimum</li>
          <li>Power Supply : 230V AC 1-Ø 50HZ</li>
        </ul><div className="technical-gallery" /><div className="detail-actions"><a className="button " href="contact.html?product=Horizontal%20laminar%20flow">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "hvacservices.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Engineering solutions</span></div><div className="eyebrow">Engineering solutions</div><h1>HVAC &amp; air systems</h1><p>Complete environmental control, from system design to energy-efficient retrofits.</p></div></section><ServiceExperience route={"hvacservices.html"} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/hvac-system.png"} alt={"HVAC & air systems"} cover={false} /></div><a className="button " href="contact.html?product=HVAC%20%26%20air%20systems">Enquire about this service<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="service.html">All solutions <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Our solutions</h3><a href="cleanroomequipment.html" className="">Clean room solutions</a><a href="hvacservices.html" className="current">HVAC &amp; air systems</a><a href="mepcontractors.html" className="">MEP contracting</a><a href="validations.html" className="">Testing &amp; validation</a><a href="facilityengservices.html" className="">Facility maintenance</a></div></aside><article className="technical" id="service-details"><h3>HVAC Systems Suppliers</h3>
        <p>AEMS IS Expert in the HVAC Systems Suppliers. AEMS Engineers is an expert in Air Conditioning, Ventilation Solutions such as installation, testing, commissioning, supply, service, maintenance and design also. It is for all industrial and domestic clean room environments.</p>
        <p>The Clean room HVAC system is a blend of many elements that are to be carefully chosen to deliver required environmental conditions. Assured all these elements include Filtration levels. Blower and Assembling a Motor, ductwork, coils of heating Cooling, filters, supply and return modules. Grills, diffusers and dampers witch distribute controlled and conditioned air to the required space.</p>
        <p>A Clean room HVAC system includes: High Quality and efficiency air handling units, air distribution and diffusion system with automatic regulation, air exhaust system, heating, cooling, dehumidifying equipment to control temperature etc.</p>
        <p>AEMS is a prominent service provider in clean room HVAC systems:</p>
        <p>Design, Fabricate, Installation, Testing and Commissioning of Duct work.</p>
        <p>Engineering Documentation like DQ, IGt OQ and Test Reports as per GMP and ISO Guidelines.</p>
        <ul>
          <h3>Main products in HVAC systems :</h3>
          <li> Pharmaceuticals</li>
          <li> Bulk Drugs</li>
          <li> Healthcare</li>
          <li> Biotech</li>
          <li> Commercial</li>
        </ul>
        <h3>Retrofit of HVAC Systems :</h3>
        <p>AEMS is one of the best organizations highly involved in providing excellent quality Retrofit of HVAC Systems service to our relevant clients. Our renowned professionals implement these services after they meet our valuable clients and render them in the best reasonable manner. Further, to offer premium grade services, AEMS use the best technology and the trendy equipment and tools. Owing to their cost-effectiveness, timely execution, and preparation, the provided services are widely among our prestigious clients.</p>
        <p>AEMS team has highly experienced in providing the Retrofit of HVAC Systems service to overall Hyderabad. The retrofit can be completed at your position and does not require the moving of the machine to a rebuild facility.</p>
        <h3>Retrofit of AHUs :</h3>
        <p>AEMS team has experience in providing the Retrofit of AHUs service to the required client. We provide service according to the client requirement. We are of the well know retrofit service. Air Handling Unit system includes a high range of insulated metal box that contains heating and/or cooling elements, fan, sound dampers, filters, and attenuators. In most cases, the AHU is related to air distribution ductwork; alternatively, the AHU can be open to the space it serves. AEMS also provide the Retrofit of AHUs to national wide.</p><div className="technical-gallery" /><div className="detail-actions"><a className="button " href="contact.html?product=HVAC%20%26%20air%20systems">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "hvacsystems.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>HVAC systems</h1><p>Integrated heating, ventilation and air conditioning.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="hvacsystems.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/hvac-system.png"} alt={"HVAC systems"} cover={false} /></div><a className="button " href="contact.html?product=HVAC%20systems">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="">Clean room panels</a><a href="galvanizedironCR.html" className="">GI clean room partitions</a><a href="cleanroomdoors.html" className="">Clean room doors</a><a href="horizontallaminarflow.html" className="">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="">Vertical laminar flow</a><a href="reverselaminarflow.html" className="">Reverse laminar flow</a><a href="staticpassbox.html" className="">Static pass box</a><a href="dynamicpassbox.html" className="">Dynamic pass box</a><a href="airshower.html" className="">Air shower</a><a href="biosafetycabinet.html" className="">Biosafety cabinet</a><a href="labfurniture.html" className="">Laboratory furniture</a><a href="airhandlingunit.html" className="">Air handling unit</a><a href="hvacsystems.html" className="current">HVAC systems</a><a href="ssfurnitures.html" className="">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>HVAC Systems</h3>
        <p>The Cleanroom HVAC system is a blend of many elements that are to be carefully chosen to deliver required environmental conditions . Assured all these elements include Fillitra1ion levels. Blower and Motor Assembly, Cooling and heating coils, duct work, suppty and return modules, filters. grills, diffusers and dampers wtiich distribute controlled and conditionaed air to the required space.</p>
        <p><strong>A Cleanroom HVA.C system includes :</strong> High Quality and efficency air handling untis, air distribution and diffusion system with automatic regulation,air exhaust system, heating, cooling, dehumidifrying equipment to control temperature etc.</p>
        <ul>
          <h3>AEMS is a prominent service provider in dean room HVAC systems :</h3>
          <li>Design,Supply, Installation,Testing and Commissioning of Air Handling Units.</li>
          <li>Design, Fabricate, Installation, Testing and Commissioning of Duct work.</li>
          <li>Clean Room Validations as per ISO 14644 guidelines.</li>
          <li>Engineering Documentation like DQ, IGt OQ and Test Reports as per GMP and ISO Guidelines.</li>
          <h3>Industries We Serve :</h3>
          <li>Pharmaceuticals</li>
          <li>Bulk Drugs</li>
          <li>Healthcare</li>
          <li>Biotech</li>
          <li>Commercial</li>
        </ul><div className="technical-gallery" /><div className="detail-actions"><a className="button " href="contact.html?product=HVAC%20systems">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "index.html": return (<div>
  <section className="cinema-hero" aria-label="AEMS engineering solutions">
    <img className="cinema-image" src="assets/premium/cleanroom-hero.png" alt="Architectural visualisation of a modern pharmaceutical clean room" fetchpriority="high" />
    <div className="cinema-shade" />
    <div className="wrap cinema-content"><div className="eyebrow">AEMS INFRA / CONCEPT TO COMMISSIONING</div><h1>Clean rooms. HVAC.<br />One engineering<br /><em>partner.</em></h1><p>Purpose-built environments for pharmaceutical, healthcare, biotechnology and food processing. Every system connected. Every detail considered.</p><div className="actions"><a className="button " href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a><a className="cinema-secondary" href="service.html">Explore our solutions <span><Icon name="arrowUpRight"/></span></a></div><div className="cinema-assurance"><span><Icon name="shieldCheck" size={18}/></span> Design. Supply. Installation. Validation.</div></div>
    <div className="hero-caption"><span>01 — ENGINEERING THE ENVIRONMENT</span><small>Architectural concept visualisation</small></div>
    <a className="hero-scroll" href="/index.html#solutions" aria-label="Explore AEMS solutions"><span>Explore our solutions</span><Icon name="arrowDown"/></a>
  </section>
  <section className="capability-strip"><div className="wrap"><div><strong>One point of responsibility.</strong><span>Complete engineering, from the first idea to a working facility.</span></div><a href="cleanroomequipment.html">Clean rooms <span><Icon name="arrowUpRight"/></span></a><a href="hvacservices.html">HVAC systems <span><Icon name="arrowUpRight"/></span></a><a href="mepcontractors.html">MEP solutions <span><Icon name="arrowUpRight"/></span></a></div></section>
  <section className="section premium-intro" data-section={0}><div className="wrap"><div className="intro-grid"><div><div className="eyebrow">WELCOME TO AEMS</div><h2>Critical environments.<br /><span>Extraordinary care.</span></h2></div><div><p>Aditya Electro Mechanical Solutions is a technology-based, knowledge-driven enterprise providing turnkey MEP and clean room solutions. We integrate your facility from concept to commissioning, with process efficiency at the heart of every decision.</p><a className="text-link" href="about.html">Get to know your engineering partner <span><Icon name="arrowUpRight"/></span></a></div></div><div className="intro-proof"><div><span>01</span><h3>Built around your process</h3><p>Customised environments, engineered for your requirements.</p></div><div><span>02</span><h3>Every discipline connected</h3><p>Mechanical, electrical and utility systems working as one.</p></div><div><span>03</span><h3>Support beyond handover</h3><p>Validation, maintenance and energy-efficient retrofits.</p></div></div></div></section>
  <section className="section immersive-solutions" id="solutions" data-section={1}><div className="wrap"><div className="section-head"><div><div className="eyebrow">OUR EXPERTISE</div><h2>Whatever your challenge.<br /><span className="muted-title">We see the whole picture.</span></h2></div><p>Explore our capabilities. Find the right engineering support for your facility.</p></div><Solutions /></div></section>
  <section className="section equipment-discovery" id="equipment-experience" data-section={2}><div className="wrap"><div className="section-head"><div><div className="eyebrow">INTERACTIVE EQUIPMENT STUDIO</div><h2>A closer look.<br /><span className="muted-title">A clearer understanding.</span></h2></div><p>Rotate, zoom and explore. Get to know the engineering before you start a conversation.</p></div><EquipmentDiscovery /></div></section>
  <section className="section premium-products" data-section={3}><div className="wrap"><div className="section-head"><div><div className="eyebrow">PURPOSE-BUILT EQUIPMENT</div><h2>Designed to perform.<br /><span className="muted-title">Built to belong.</span></h2></div><a className="button light" href="products.html">Explore all 14 products<span><Icon name="arrowUpRight"/></span></a></div><div className="product-grid featured-products"><ProductCard product={products.find(p=>p[0]==="airhandlingunit.html")} /><ProductCard product={products.find(p=>p[0]==="airshower.html")} /><ProductCard product={products.find(p=>p[0]==="staticpassbox.html")} /><ProductCard product={products.find(p=>p[0]==="cleanroompanels.html")} /></div></div></section>
  <section className="industry-banner"><img src="assets/premium/cleanroom-hero.png" alt="Illustrative clean room environment" loading="lazy" /><div className="industry-banner-shade" /><div className="wrap"><div className="eyebrow">ENGINEERING WITH PURPOSE</div><h2>The environments<br />behind better outcomes.</h2><p>Dedicated solutions for the sectors where controlled conditions and reliable systems matter most.</p><div className="industry-pills"><a href="cleanroomequipment.html">Pharmaceutical <span><Icon name="arrowUpRight"/></span></a><a href="hvacservices.html">Healthcare <span><Icon name="arrowUpRight"/></span></a><a href="cleanroomequipment.html">Biotechnology <span><Icon name="arrowUpRight"/></span></a><a href="service.html">Food processing <span><Icon name="arrowUpRight"/></span></a></div></div></section>
  <section className="section facility-studio" data-section={4}><div className="wrap"><div className="facility-studio-heading"><div><div className="eyebrow">SEE HOW IT ALL CONNECTS</div><h2>Every system.<br /><span className="muted-title">One complete environment.</span></h2></div><p>Explore the layers of a clean room: the space, the air, and the services that bring it to life.</p></div><FacilityWorld /></div></section>
  <section className="section premium-process" data-section={5}><div className="wrap"><div className="section-head"><div><div className="eyebrow">FROM IDEA TO OPERATION</div><h2>A clear process.<br /><span className="muted-title">A confident next step.</span></h2></div><a className="text-link" href="contact.html">Start your project <span><Icon name="arrowUpRight"/></span></a></div><div className="premium-process-grid"><div className="process-step"><span className="process-number">01</span><h3>Listen &amp; understand</h3><p>We start with your process, your facility and your priorities.</p></div><div className="process-step"><span className="process-number">02</span><h3>Design &amp; engineer</h3><p>We coordinate the disciplines into one complete engineering solution.</p></div><div className="process-step"><span className="process-number">03</span><h3>Build &amp; integrate</h3><p>Equipment supply, installation and system integration, managed together.</p></div><div className="process-step"><span className="process-number">04</span><h3>Test &amp; hand over</h3><p>Validation, documentation and support to prepare your facility for operation.</p></div></div></div></section>
  <section className="section premium-clients" data-section={6}><div className="wrap"><div className="section-head"><div><div className="eyebrow">RELATIONSHIPS THAT MATTER</div><h2>Our clients.<br /><span className="muted-title">Our commitment.</span></h2></div><a className="text-link" href="clients.html">Explore our client portfolio <span><Icon name="arrowUpRight"/></span></a></div><div className="premium-logo-wall"><a href="clients.html"><img src="assets/img/c1.png" alt="AEMS client portfolio logo 1" loading="lazy" /></a><a href="clients.html"><img src="assets/img/c2.png" alt="AEMS client portfolio logo 2" loading="lazy" /></a><a href="clients.html"><img src="assets/img/c3.png" alt="AEMS client portfolio logo 3" loading="lazy" /></a><a href="clients.html"><img src="assets/img/c4.png" alt="AEMS client portfolio logo 4" loading="lazy" /></a><a href="clients.html"><img src="assets/img/c5.png" alt="AEMS client portfolio logo 5" loading="lazy" /></a><a href="clients.html"><img src="assets/img/c6.png" alt="AEMS client portfolio logo 6" loading="lazy" /></a><a href="clients.html"><img src="assets/img/c7.png" alt="AEMS client portfolio logo 7" loading="lazy" /></a><a href="clients.html"><img src="assets/img/c8.png" alt="AEMS client portfolio logo 8" loading="lazy" /></a><a href="clients.html"><img src="assets/img/c9.png" alt="AEMS client portfolio logo 9" loading="lazy" /></a><a href="clients.html"><img src="assets/img/c10.png" alt="AEMS client portfolio logo 10" loading="lazy" /></a><a href="clients.html"><img src="assets/img/c11.png" alt="AEMS client portfolio logo 11" loading="lazy" /></a><a href="clients.html"><img src="assets/img/c12.png" alt="AEMS client portfolio logo 12" loading="lazy" /></a></div></div></section>
  <section className="section customer-questions" data-section={7}><div className="wrap faq-layout"><div><div className="eyebrow">HELPING YOU GET STARTED</div><h2>A few good<br /><span className="muted-title">questions.</span></h2><p>Have a project in mind? Our engineering team can help you work through the details.</p><a className="text-link" href="contact.html">Ask us a question <span><Icon name="arrowUpRight"/></span></a></div><div className="faq-list"><details open><summary>Can AEMS deliver a complete turnkey project?<span>+</span></summary><p>Yes. AEMS integrates clean room and MEP solutions from concept through design, supply, installation, testing and commissioning.</p></details><details><summary>Which industries do you work with?<span>+</span></summary><p>AEMS serves pharmaceutical, healthcare, biotechnology and food processing environments, with customised environmental control and building services.</p></details><details><summary>Can you improve an existing HVAC system?<span>+</span></summary><p>AEMS provides retrofit solutions for existing HVAC systems and air handling units. The engineering team can review your current system and discuss suitable improvements.</p></details><details><summary>What should I share for a project enquiry?<span>+</span></summary><p>Tell us about your industry, process, facility location and the equipment or services you need. Include any available drawings or technical requirements in your email to our team.</p></details></div></div></section>
  <section className="customer-cta"><div className="wrap"><div><div className="eyebrow">LET’S BUILD THE RIGHT SOLUTION</div><h2>Your next project<br />starts with a conversation.</h2><p>Speak with our team about your clean room, HVAC, MEP or equipment requirements.</p></div><div className="customer-cta-actions"><a className="button " href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a><a href="tel:+919000230419">Call +91 90002 30419 <span><Icon name="arrowUpRight"/></span></a><a href="mailto:info@aemsinfra.com">info@aemsinfra.com <span><Icon name="arrowUpRight"/></span></a></div></div></section>
</div>
);
case "labfurniture.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>Laboratory furniture</h1><p>Practical furniture for laboratory workflows.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="labfurniture.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/lab-furniture.png"} alt={"Laboratory furniture"} cover={false} /></div><a className="button " href="contact.html?product=Laboratory%20furniture">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="">Clean room panels</a><a href="galvanizedironCR.html" className="">GI clean room partitions</a><a href="cleanroomdoors.html" className="">Clean room doors</a><a href="horizontallaminarflow.html" className="">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="">Vertical laminar flow</a><a href="reverselaminarflow.html" className="">Reverse laminar flow</a><a href="staticpassbox.html" className="">Static pass box</a><a href="dynamicpassbox.html" className="">Dynamic pass box</a><a href="airshower.html" className="">Air shower</a><a href="biosafetycabinet.html" className="">Biosafety cabinet</a><a href="labfurniture.html" className="current">Laboratory furniture</a><a href="airhandlingunit.html" className="">Air handling unit</a><a href="hvacsystems.html" className="">HVAC systems</a><a href="ssfurnitures.html" className="">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>Lab Furniture</h3>
        <p>Our range of Laboratory Furnitures are designed impeccably after studying the usage patterns of the users over a period of time. All our products in this range are engrained with our philosophy of seamlessly integrating utilitarian functionality, user friendliness and eye catching aesthetics. All these are accomplished with durability as the core design criteria. We ensure that all these products seamlessly blend and effortlessly integrate with our other Cleanroom products &amp; panels.</p>
        <p>With a reputation for exceptional value, our fume hoods are found in industrial, pharmaceutical and laboratories across the country. We make Exhaust Hood keeping in mind maximum user comfort with exquisite workmanship. You can expect easy access to our knowledgeable staff at every phase of the project. Our quality and timely delivery ensures we satisfy even the most demanding customers.</p>
        <ul>
          <h3>Specifications</h3>
          <li>Wide range of C-Frame systems for every need</li>
          <li>Adaptable to changing demands of the lab</li>
          <li>Easy to shift and easy portability</li>
          <li>High load bearing capability</li>
          <li>Easy access to rear ducts for stress free utility line maintenance</li>
          <li>Modularity and aesthetics</li>
          <p>Our Work Tables are manufactured in various designs and shapes, custom made to suit customer's requirements. The construction material is epoxy coated galvanized iron with suitable thickness. The system are designed to be fitted with pedestal system and as per clients specifications. Provision for reagent racks, valves for water and gas along with required electrical connections and any other provisions as required. The system is designed and available with various knee gap models or continous modular styles.</p>
          <li>High quality GI powder / epoxy coated</li>
          <li>Various sizes and shapes and colors</li>
          <li>Custom designed as per requirement</li>
          <li>Shutters and drawers as required</li>
          <li>Special hinges and electrical points</li>
          <li>Leg space as per requirement</li>
        </ul><div className="technical-gallery" /><div className="detail-actions"><a className="button " href="contact.html?product=Laboratory%20furniture">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "mepcontractors.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Engineering solutions</span></div><div className="eyebrow">Engineering solutions</div><h1>MEP contracting</h1><p>Mechanical, electrical and plumbing systems. One integrated engineering partner.</p></div></section><ServiceExperience route={"mepcontractors.html"} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/mep.png"} alt={"MEP contracting"} cover={false} /></div><a className="button " href="contact.html?product=MEP%20contracting">Enquire about this service<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="service.html">All solutions <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Our solutions</h3><a href="cleanroomequipment.html" className="">Clean room solutions</a><a href="hvacservices.html" className="">HVAC &amp; air systems</a><a href="mepcontractors.html" className="current">MEP contracting</a><a href="validations.html" className="">Testing &amp; validation</a><a href="facilityengservices.html" className="">Facility maintenance</a></div></aside><article className="technical" id="service-details"><h3>MEP Contractors</h3>
        <p>AEMS is one of the well known MEP Contractors who is offering complete MEP (Mechanical, Electrical, &amp; Plumbing) consulting services.</p>
        <p>Where we can get complete MEP (Mechanical, Electrical, &amp; Plumbing) turnkey consulting services. We give savvy and time-bound mechanical electrical and plumbing (MEP) Contracting services utilizing the most advanced developments.</p>
        <p>Our MEP experts are also much experienced and had some expertise in Living Quarter Modules, Offshore Platforms, and Industrial Buildings for Gas and Oil Sector.</p>
        <p>Our aim is to provide high standards of quality engineering services as the best MEP Contractors.</p>
        <ul>
          <h3>Mechanical Services</h3>
          <li> Air Conditioning</li>
          <li> Heating and Ventilation</li>
          <li> Noise Control</li>
          <li> Smoke Extract ventilation</li>
          <li> Sprinkler protection</li>
        </ul>
        <ul>
          <h3>AEMS offers the following MEP services</h3>
          <li> We design and completely execute the electrical projects</li>
          <li>Our team provides complete installation of plumbing services</li>
          <li> We do installation and testing of Fire-fighting systems</li>
        </ul>
        <ul>
          <h3>Electrical Services</h3>
          <li> Internal and External lighting</li>
          <li> Plant lighting</li>
          <li> Emergency lighting</li>
          <li> Energy management</li>
        </ul>
        <ul>
          <h3>Plumbing Services</h3>
          <li> Drinking water supplies</li>
          <li> Rainwater system</li>
          <li> Drainage</li>
          <li> Sanitary Appliances</li>
        </ul>
        <p>As the experienced MEP Contractors, we create effective design and installation of building services.</p>
        <p>AEMS committed to offering a wide range of products to become the market leader by satisfying the client requirements.</p><div className="technical-gallery" /><div className="detail-actions"><a className="button " href="contact.html?product=MEP%20contracting">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "reverselaminarflow.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>Reverse laminar flow</h1><p>Controlled containment for material handling.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="reverselaminarflow.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/reverse-l-f.png"} alt={"Reverse laminar flow"} cover={false} /></div><a className="button " href="contact.html?product=Reverse%20laminar%20flow">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="">Clean room panels</a><a href="galvanizedironCR.html" className="">GI clean room partitions</a><a href="cleanroomdoors.html" className="">Clean room doors</a><a href="horizontallaminarflow.html" className="">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="">Vertical laminar flow</a><a href="reverselaminarflow.html" className="current">Reverse laminar flow</a><a href="staticpassbox.html" className="">Static pass box</a><a href="dynamicpassbox.html" className="">Dynamic pass box</a><a href="airshower.html" className="">Air shower</a><a href="biosafetycabinet.html" className="">Biosafety cabinet</a><a href="labfurniture.html" className="">Laboratory furniture</a><a href="airhandlingunit.html" className="">Air handling unit</a><a href="hvacsystems.html" className="">HVAC systems</a><a href="ssfurnitures.html" className="">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>Reverse Laminar Air Flow Unit</h3>
        <p>The Reverse Laminar Air Flow is ideal for Operator Protection, Product Protection and Environment Protection. Based on the smooth working profile and high-end performance of our Reverse Laminar Air Flow, Furthermore, Reverse Laminar Air Flow can be customized to suit the precise requirements of the clients.</p>
        <ul>
          <h3>Specifications</h3>
          <li>Maximum protection from airborne contaminants produced at the time of powder handling operations such as charging, sampling, and dispensing</li>
          <li>Powder coated Mild Steel, SS 304 / SS 316</li>
          <li>Down flow booth functions on a recirculatory airflow principle</li>
          <li>At the base of the rear wall there is Pre filter to capture the airborne generated contaminants. Intake velocity at pre filters increases to offer scavenging effect</li>
          <li>Continuous, clean, laminar down flow of Class 100 air supplied to work area in order to suppress <br />Any dust clouds produced during open powder processing<br />And eradicate and capture airborne particles from the operator's breathing zone</li>
          <li>Triple Stage filtration</li>
          <li>EU6 - Prefilter (95% down to 5 micron)</li>
          <li>EU14 - HEPA Filter - Supply (99.999% down to 0.3 micron)</li>
          <li>EU7 - INTERMEDIATE FILTER - Supply / Exhaust (95% down to 3 micron)</li>
          <li>Balanced Motor-blower with suspension arrangement for diminishing the noise level</li>
          <li>Internal covings for easy cleaning</li>
          <li>SS 304 Double walled Side Panels</li>
          <li>DOP Test port at upstream of HEPA filter</li>
          <li>Differential Pressure Gauge : 3 Nos to monitor pressure drop across three stages of filters</li>
          <li>On / Off Switch for Motor</li>
          <li>5/15 Amp switch socket for external equipment</li>
          <li>Fluorescent Light with Milky White Diffuser</li>
          <h3>Accessories Made Available:</h3>
          <li>Magnehelic Gauge with High / Low Indicators</li>
          <li>Digital Pressure Gauge</li>
          <li>Flame Proof Execution</li>
          <li>Double skin side panels with view windows.</li>
          <li>Front Anti Static PVC Curtains</li>
          <li>SS stand alone table for keeping Weighing Balance.</li>
          <li>Feather touch Based Control System</li>
          <li>SS 304 Worktable with due reinforcement</li>
        </ul>
        <h3>Dimensions</h3>
        <div className="table-scroll" tabIndex={0} role="region" aria-label="Technical specifications. Scroll horizontally to see all columns."><table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Hepa Filter Area (L x W)</th>
                <th>Work Area Dimension <br />(L x W x H)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LCAT- RLAF-48-36</td>
                <td>1220 x 915 MM</td>
                <td>1220 x 915 x 2135 MM</td>
              </tr>
              <tr>
                <td>LCAT- RLAF-48-48</td>
                <td>1220 x 1220 MM</td>
                <td>1220 x 1220 x 2135 MM</td>
              </tr>
              <tr>
                <td>LCAT- RLAF-72-48</td>
                <td>1830 x 1220 MM</td>
                <td>1830 x 1220 x 2135 MM</td>
              </tr>
            </tbody>
          </table></div>
        <ul>
          <h3>Operating Conditions</h3>
          <li>Air cleanliness : ISO Class 5 (ISO 14644-1:1999 (E))</li>
          <li>Air Velocities : 0.45 ± 0.05 mps</li>
          <li>Air Flow Vertical - Recirculatory</li>
          <li>Noise Level : Less than 67 dB</li>
          <li>Vibration Level : Minimum</li>
          <li>Power Supply : 230V AC 1-Ø 50HZ</li>
        </ul><div className="technical-gallery" /><div className="detail-actions"><a className="button " href="contact.html?product=Reverse%20laminar%20flow">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "service.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Our solutions</span></div><div className="eyebrow">Our solutions</div><h1>Every system.<br />One engineering partner.</h1><p>Discover AEMS services across clean room design, HVAC, MEP, validation, facility maintenance and energy-efficient retrofits.</p></div></section><ServiceExperience route={"service.html"} /><section className="section" data-section={0}><div className="wrap"><div className="service-grid"><a href="cleanroomequipment.html" className="service-card "><div className="service-visual"><img src="assets/premium/cleanroom-hero.png" alt="Clean room solutions concept visualisation" loading="lazy" /><span>01 / CONCEPT VISUALISATION</span></div><div className="service-card-copy"><div className="service-icon"><svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10 12 5l9 5v10l-9 5-9-5V10Z M3 10l9 5 9-5 M12 15v10 M7 8l9 5v8" /></svg></div><span className="arrow">↗</span><h3>Clean room solutions</h3><p>Modular environments, engineered around the precision your process demands.</p><span className="service-more">Explore this solution ↗</span></div></a><a href="hvacservices.html" className="service-card "><div className="service-visual"><img src="assets/premium/ahu-studio.png" alt="HVAC & air systems concept visualisation" loading="lazy" /><span>02 / CONCEPT VISUALISATION</span></div><div className="service-card-copy"><div className="service-icon"><svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8h13a3 3 0 1 0-3-3 M3 13h20a3 3 0 1 1-3 3 M3 18h8a3 3 0 1 1-3 3" /></svg></div><span className="arrow">↗</span><h3>HVAC &amp; air systems</h3><p>Complete environmental control, from system design to energy-efficient retrofits.</p><span className="service-more">Explore this solution ↗</span></div></a><a href="mepcontractors.html" className="service-card "><div className="service-visual"><img src="assets/img/mep-home.png" alt="MEP contracting from the AEMS portfolio" loading="lazy" /><span>03 / ENGINEERING SERVICES</span></div><div className="service-card-copy"><div className="service-icon"><svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 24V9h5V3h8v6h5v15 M10 9h8 M10 13h2m3 0h3 M10 17h2m3 0h3 M12 24v-4h4v4" /></svg></div><span className="arrow">↗</span><h3>MEP contracting</h3><p>Mechanical, electrical and plumbing systems. One integrated engineering partner.</p><span className="service-more">Explore this solution ↗</span></div></a><a href="validations.html" className="service-card "><div className="service-visual"><img src="assets/img/validations.png" alt="Testing & validation from the AEMS portfolio" loading="lazy" /><span>04 / ENGINEERING SERVICES</span></div><div className="service-card-copy"><div className="service-icon"><svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 5H5v20h18V5h-3 M10 3h8v5h-8V3Z M9 15l3 3 7-7 M9 22h10" /></svg></div><span className="arrow">↗</span><h3>Testing &amp; validation</h3><p>Understand your environment with clean room testing and detailed documentation.</p><span className="service-more">Explore this solution ↗</span></div></a><a href="facilityengservices.html" className="service-card "><div className="service-visual"><img src="assets/img/facility.png" alt="Facility maintenance from the AEMS portfolio" loading="lazy" /><span>05 / ENGINEERING SERVICES</span></div><div className="service-card-copy"><div className="service-icon"><svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m18 3 4 4-4 4-4-4 4-4Z M4 22l10-10 M4 22l3 3 10-10 M5 4l6 6 M3 3l2 5 3-3-5-2Z" /></svg></div><span className="arrow">↗</span><h3>Facility maintenance</h3><p>Keep critical equipment and utilities operating with dedicated engineering support.</p><span className="service-more">Explore this solution ↗</span></div></a><a href="service.html#retrofit" className="service-card accent"><div className="service-visual"><img src="assets/img/hvac-system.png" alt="Energy-efficient retrofits from the AEMS portfolio" loading="lazy" /><span>06 / ENGINEERING SERVICES</span></div><div className="service-card-copy"><div className="service-icon"><svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M23 12a10 10 0 0 0-17-7L2 9 M2 3v6h6 M5 16a10 10 0 0 0 17 6l4-4 M26 24v-6h-6 M16 9l-5 7h5l-2 6" /></svg></div><span className="arrow">↗</span><h3>Energy-efficient retrofits</h3><p>Reimagine existing HVAC systems with direct-drive and EC fan technology.</p><span className="service-more">Explore this solution ↗</span></div></a></div></div></section><section className="section" style={{paddingTop: 0}} data-section={1}><div className="wrap detail-grid"><aside className="detail-side"><div className="eyebrow">Engineering services</div><h3>Explore the details.</h3><div className="side-links"><h3>Jump to a service</h3><a href="/service.html#service-0">Our Services</a><a href="/service.html#service-1">HVAC Systems</a><a href="/service.html#service-2">Clean Rooms</a><a href="/service.html#service-3">Clean Room Equipments</a><a href="/service.html#service-4">Electrical</a><a href="/service.html#service-5">Plumbing / Piping</a><a href="/service.html#service-6">Validation</a><a href="/service.html#service-7">Facility Engineering Maintenance Services</a><a href="/service.html#retrofit">Retrofit @ Existing HVAC Systems</a></div></aside><article className="technical" id="service-details"><h3 id="service-0">Our<span> Services</span></h3>
        <p><strong>AEMS</strong> is one stop solution to all your MEP and Clean Room Requirements. From classifying your requirements, to understanding Global Trends, Conducting critical analysis, understanding possibility, conceptualization to creating world class clean rooms.</p>
        <ul>
          <h3>What We Offer Is :</h3>
          <li>HVAC Systems</li>
          <li>Clean Rooms</li>
          <li>Clean Room Equipments</li>
          <li>Electrical</li>
          <li>Piping</li>
          <li>Validation</li>
          <li>Facility Engineering Maintenance Services</li>
          <li>Retrofit @ Existing HVAC Systems</li>
        </ul>
        <p>AEMS integrated clean room systems interface with floors, ceilings, and mechanical components to provide an ultra-clean environment with effective control of air flow, pressure, temperature, humidity and filtration. They can be customized to match exact requirements and deliver an economical substitute to conservative construction without negotiating quality, durability or efficiency. Integrated clean rooms also utilize a flexible design that allows for fast, easy installation in a system that can be expanded or relocated as need be.</p>
        <p>Our promise is not complete until we provide detailed, compliant documentation on the conditions existing in your cleanroom facility. Our certification reports are accurately equipped and professionally organized, to give you easy access to the information you need for evaluation and assessment of your cleanroom facility operational parameters.</p>
        <h3 id="service-1">HVAC Systems</h3>
        <p>AEMS Engineers specializes in the design, supply, installation, testing, commissioning, service and maintenance of Air Conditioning, Ventilation Solutions for all types of Clean Room, industrial and domestic environments.</p>
        <p>The Cleanroom HVAC system is a blend of many elements that are to be carefully chosen to deliver required environmental conditions . Assured all these elements include Fillitra1ion levels. Blower and Motor Assembly, Cooling and heating coils, duct work, suppty and return modules, filters. grills, diffusers and dampers wtiich distribute controlled and conditionaed air to the required space.</p>
        <p><strong>A Cleanroom HVA.C system includes :</strong> High Quality and efficency air handling untis, air distribution and diffusion system with automatic regulation,air exhaust system, heating, cooling, dehumidifrying equipment to control temperature etc.</p>
        <ul>
          <h3>AEMS is a prominent service provider in dean room HVAC systems :</h3>
          <li>Design,Supply, Installation,Testing and Commissioning of Air Handling Units.</li>
          <li>Design, Fabricate, Installation, Testing and Commissioning of Duct work.</li>
          <li>Clean Room Validations as per ISO 14644 guidelines.</li>
          <li>Engineering Documentation like DQ, IGt OQ and Test Reports as per GMP and ISO Guidelines.</li>
        </ul>
        <ul>
          <h3>Industries We Serve :</h3>
          <li>Pharmaceuticals</li>
          <li>Bulk Drugs</li>
          <li>Healthcare</li>
          <li>Biotech</li>
          <li>Commercial</li>
        </ul>
        <h3 id="service-2">Clean Rooms</h3>
        <p>AEMS integrated clean room systems interface with floors, ceilings, and mechanical components to provide an ultra-clean environment with effective control of air flow, pressure, temperature, humidity and filtration. They can be customized to match exact requirements and deliver an economical substitute to conservative construction without negotiating quality, durability or efficiency. Integrated clean rooms also utilize a flexible design that allows for fast, easy installation in a system that can be expanded or relocated as need be.</p>
        <p>Our promise is not complete until we provide detailed, compliant documentation on the conditions existing in your cleanroom facility. Our certification reports are accurately equipped and professionally organized, to give you easy access to the information you need for evaluation and assessment of your cleanroom facility operational parameters</p>
        <ul>
          <h3>Project Delivery Approach:</h3>
          <p>Turn-key design buildClean rooms with an end user focus</p>
          <li>Single point responsibility, accountability and performance.</li>
          <li>Design to meet the customer budgets without compromising the quality of the products.</li>
          <li>Fast track project, commissioning, training and handing over the facility</li>
          <p> Brownfield clean roomspartnering with construction management firms and clients:</p>
          <li>Combination of best products, systems and integration</li>
          <li>Expertise, sequence of construction, proper know -how and adherence to clean room build technologies.</li>
          <p>Process and System integrationproviding mission critical process performance</p>
          <li>Identification of required utilities and made provisions in the ceiling and wall panels</li>
          <li>Fully outfitted and ready for installation and start-up</li>
          <li>Reduced time from concept to commissioning stage</li>
        </ul>
        <h3 id="service-3">Clean Room Equipments</h3>
        <p>We offer Clean Room equipment within the clean room for pharmaceuticals, healthcare and laboratory applications. We provide customised solution and design clean room equipments. The equipments are designed and supplied with ease of use and quality to meet the required regulatory guidelines. AEMS offers customised and superior quality equipments like:</p>
        <ul>
          <li>Laminar Air Flow Cabinets</li>
          <li>Dispensing Booths</li>
          <li>Dynamic and Static Pass Boxes</li>
          <li>Garment Storage Cabinets</li>
          <li>Air Showers</li>
          <li>Dedusting Booths</li>
          <li>Centralised Dust Collection Systems etc</li>
        </ul>
        <h3 id="service-4">Electrical</h3>
        <p>AEMS provides electrical services from concept to commissioning of each project, enabling the client to conclude an optimum design, supply, installation, testing and commissioning of thefollowing:</p>
        <ul>
          <li>HT / LT network</li>
          <li>HT &amp; LT Panels, Transformers</li>
          <li>MCC, PCC, LDBs</li>
          <li>Electrical layouts</li>
          <li>Total Electrical load calculation</li>
          <li>Power Distribution schemes, UPS Power distribution</li>
          <li>Illumination, Clean room / Industrial / Commercial Lighting</li>
          <li>Bus Bar routing &amp; Cable trench</li>
        </ul>
        <h3 id="service-5">Plumbing / Piping</h3>
        <p>AEMS Offers wide range of plumbing solutions to meet the site / client requirements. These are catering to the requirements of various commercial, Healthcare, Infrastructure and institutional areas. Our experts ensure that proper measures are taken as per WHO Standards which also leads to protection of the treated water.</p>
        <ul>
          <li>Water treatment and distribution</li>
          <li>Rain water harvesting, treatment, reuse and disposal</li>
          <li>Storm water disposal</li>
          <li>Hot Water Generation Systems</li>
          <li>Land Scapes</li>
          <li>Solid Waste management systems</li>
          <li>Sewage water collection, treatment, reuse and disposal.</li>
        </ul>
        <h3 id="service-6">Validation</h3>
        <p>AEMS offers a complete clean room validation process to ensure that your controlled environment is performing as per user specifications. Clean room / HVAC validation shall be carried out to ensure that the facility is fit for its intended usage, meet the different regulatory requirements like US FDA, WHO, Schedule M. All tests shall be carried-out as per ISO 14644-3 guideline specifications.</p>
        <ul>
          <h3>Clean Room / hvac Validation Tests Include:</h3>
          <li>Air velocity measurement</li>
          <li>Air exchange rate</li>
          <li>Room pressurization test</li>
          <li>Filter Integrity test-PAO</li>
          <li>Non-viable particle count test</li>
          <li>Recovery test</li>
          <li>Temperature and Humidity measurement test</li>
          <li>Light intensity test etc</li>
        </ul>
        <h3 id="service-7">Facility Engineering Maintenance Services</h3>
        <p>We understand the needs of the sector, both pharmaceutical and healthcare sectors. We provide the support manpower for the following services:</p>
        <ul>
          <li>Operation and maintenance of utility equipments like HVAC Systems, Water treatment plants, Dust collection systems.</li>
          <li>Maintenance of process equipments like RMG, FBD, Tablet Compression machines, Capsule filling machines, Coating machines and Packing machines etc.</li>
          <li>Preparation of SOP's, PPM Schedules, Calibration schedules etc</li>
          <li>Preparation and executing the equipment qualifications like: DQ,IQ, OQ and PQ as per USFDA/WHO/cGMP</li>
          <li>Pre-audit &amp; Internal Checks</li>
          <li>Training on Clean rooms, HVAC systems and Documentation as per current good manufacturing process.</li>
        </ul>
        <h3 id="retrofit">Retrofit @ Existing HVAC Systems</h3>
        <p>An HVAC retrofit is a major undertaking for the facility department, the occupants and the organization’s management. It is also an opportunity — an opportunity that, because of the cost and disruption involved, might not come along again for decades. What's more, the success of the project will shape the way that occupants and top management perceive the facility department — a perception that will influence the success of future facility initiatives. Taking the time to get the retrofit right is worth the effort.</p>
        <p>There is a tendency when planning for HVAC retrofits to develop tunnel vision and focus on only a specific component or portion of the HVAC system. The chiller that is becoming unreliable or the air handler that no longer meets the needs of the conditioned space might be serious problems that demand to be addressed. But before making retrofit decisions, facility executives should step back and determine if other projects planned for the building will affect HVAC system operation.</p>
        <p>For instance, upgrading the lighting system or installing more energy-efficient windows will reduce cooling loads. If those projects are planned in the near future, then a planned retrofit program for the building’s chiller should be scheduled after they have been completed. Reduced cooling loads will allow a smaller chiller, reducing both first and operating costs.</p>
        <p>For Example, Belt driven fans (Both Forward Curved and Backward Curved) will be replaced with Direct Driven Plug Fans or EC Blowers.</p>
        <ul>
          <h3>Belt Driven Fans - Components:</h3>
          <p>Belt driven fans have many of components at work</p>
          <li>Fan ⃰ inclusive the bearings</li>
          <li>2 Pulleys ⃰ with hubs for different shaft diameters (Fan and Motor)</li>
          <li>Number of Belts ⃰</li>
          <li>Standard Motor ⃰</li>
          <li>Optional VSD Controller ⃰ If speed control</li>
          <li>Clamping side of motors ( for Belt tension)</li>
          <li>Optional Belt Guard ⃰</li>
          <li>Efficiency is the cumulative sum of all components ⃰</li>
          <li>ɳsFsys: ɳVSD*ɳMotor * ɳBelt*ɳBelt guard * ɳPulley * ɳFan. Aprox 60% -62% ⃰<br />The ⃰ marked components have influence on efficiency of the complete fan systems.</li>
          <h3>Direct Drive Fans - Components:</h3>
          <p>Plug Fans: Only 3 Components</p>
          <li>Impellor</li>
          <li>Standard Motor</li>
          <li>VFD</li>
          <li>ɳsFsys: ɳVSD*ɳMotor *ɳFan. Aprox: 65%-70%</li>
          <p>EC Fans : Only 2 Components</p>
          <li>Impeller</li>
          <li>EC Technology ( Brushless DC Motor and Controller)</li>
        </ul></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "ssfurnitures.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>Stainless steel furniture</h1><p>Stainless steel equipment for clean room applications.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="ssfurnitures.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/ssf1.png"} alt={"Stainless steel furniture"} cover={false} /></div><a className="button " href="contact.html?product=Stainless%20steel%20furniture">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="">Clean room panels</a><a href="galvanizedironCR.html" className="">GI clean room partitions</a><a href="cleanroomdoors.html" className="">Clean room doors</a><a href="horizontallaminarflow.html" className="">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="">Vertical laminar flow</a><a href="reverselaminarflow.html" className="">Reverse laminar flow</a><a href="staticpassbox.html" className="">Static pass box</a><a href="dynamicpassbox.html" className="">Dynamic pass box</a><a href="airshower.html" className="">Air shower</a><a href="biosafetycabinet.html" className="">Biosafety cabinet</a><a href="labfurniture.html" className="">Laboratory furniture</a><a href="airhandlingunit.html" className="">Air handling unit</a><a href="hvacsystems.html" className="">HVAC systems</a><a href="ssfurnitures.html" className="current">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>SS Furnitures</h3>
        <p>SS Computer Table</p>
        <p>SS Working Table</p>
        <p>SS Office Table</p>
        <p>SS Pilot Table</p>
        <p>SS MOP Trolley</p>
        <p>SS Transporter Trolley</p>
        <p>SS Platform Trolley</p>
        <p>SS Staff Locker</p>
        <p>SS Shoe Rack</p>
        <p>SS Apron Cabinets</p>
        <p>SS Cross Over Bench</p>
        <p>SS Rack</p>
        <p>SS Wash Basin</p>
        <p>SS Pallets</p><div className="technical-gallery"><PhotoButton src={"assets/img/ssf2.png"} alt={"Stainless steel furniture — additional product illustration"} cover={false} /><PhotoButton src={"assets/img/ssf3.png"} alt={"Stainless steel furniture — additional product illustration"} cover={false} /><PhotoButton src={"assets/img/ssf4.png"} alt={"Stainless steel furniture — additional product illustration"} cover={false} /><PhotoButton src={"assets/img/ssf5.png"} alt={"Stainless steel furniture — additional product illustration"} cover={false} /><PhotoButton src={"assets/img/ssf6.png"} alt={"Stainless steel furniture — additional product illustration"} cover={false} /><PhotoButton src={"assets/img/ssf7.png"} alt={"Stainless steel furniture — additional product illustration"} cover={false} /><PhotoButton src={"assets/img/ssf8.png"} alt={"Stainless steel furniture — additional product illustration"} cover={false} /><PhotoButton src={"assets/img/ssf9.png"} alt={"Stainless steel furniture — additional product illustration"} cover={false} /><PhotoButton src={"assets/img/ssf10.png"} alt={"Stainless steel furniture — additional product illustration"} cover={false} /><PhotoButton src={"assets/img/ssf11.png"} alt={"Stainless steel furniture — additional product illustration"} cover={false} /><PhotoButton src={"assets/img/ssf12.png"} alt={"Stainless steel furniture — additional product illustration"} cover={false} /><PhotoButton src={"assets/img/ssf13.png"} alt={"Stainless steel furniture — additional product illustration"} cover={false} /><PhotoButton src={"assets/img/ssf14.png"} alt={"Stainless steel furniture — additional product illustration"} cover={false} /></div><div className="detail-actions"><a className="button " href="contact.html?product=Stainless%20steel%20furniture">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "staticpassbox.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>Static pass box</h1><p>Transfer materials between controlled environments.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="staticpassbox.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/home-passbox.png"} alt={"Static pass box"} cover={false} /></div><a className="button " href="contact.html?product=Static%20pass%20box">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="">Clean room panels</a><a href="galvanizedironCR.html" className="">GI clean room partitions</a><a href="cleanroomdoors.html" className="">Clean room doors</a><a href="horizontallaminarflow.html" className="">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="">Vertical laminar flow</a><a href="reverselaminarflow.html" className="">Reverse laminar flow</a><a href="staticpassbox.html" className="current">Static pass box</a><a href="dynamicpassbox.html" className="">Dynamic pass box</a><a href="airshower.html" className="">Air shower</a><a href="biosafetycabinet.html" className="">Biosafety cabinet</a><a href="labfurniture.html" className="">Laboratory furniture</a><a href="airhandlingunit.html" className="">Air handling unit</a><a href="hvacsystems.html" className="">HVAC systems</a><a href="ssfurnitures.html" className="">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>Static Pass Box</h3>
        <p>AEMS offering supreme quality Static Pass Box, which is made in compliance with world class standards. Static Pass Box is specifically designed that aids in the material transfer without much personnel movement. Furthermore, the Static Pass Box also acts as a control for entrance of contaminants in clean room and other classified areas</p>
        <ul>
          <h3>Specifications</h3>
          <li>Made available in powder coated Mild Steel, SS 304 / SS 316</li>
          <li>Double Walled Construction</li>
          <li>Doors equipped with double walled flush glass view panels</li>
          <li>SS Handles and SS hinges</li>
          <li>Internal covings for easy cleaning</li>
          <li>Electro-magnetic Interlocking</li>
          <li>Indicator on either side</li>
          <li>Internal covings for easy cleaning</li>
          <li>Door Release Switch on either side</li>
          <h3>Accessories Made Available:</h3>
          <li>Mechanical Interlocking</li>
          <li>Provision for ventilation with perforated grille</li>
          <li>U. V. Light with Hour Meter with interlocking arrangement to put-off U.V. Light if any of the door opens</li>
          <li>Three wall construction for floor mounting</li>
          <li>Floor mounted construction with three side wall structure &amp; Door Drop Seal</li>
          <li>Support stand for mounting the pass box</li>
          <li>Flange for filling the gap between the pass box and the clean room wall</li>
          <li>Fluorescent light with interlocking arrangement to put on light when the doors are in closed position</li>
        </ul>
        <h3>Dimensions</h3>
        <div className="table-scroll" tabIndex={0} role="region" aria-label="Technical specifications. Scroll horizontally to see all columns."><table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Work Area Dimension <br />(L x W x H)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LCAT- SPB- 18-18-18</td>
                <td>450 x 450 x 450 mm</td>
              </tr>
              <tr>
                <td>LCAT- SPB- 24-24-24</td>
                <td>610 x 610 x 610 mm</td>
              </tr>
            </tbody>
          </table></div>
        <ul>
          <h3>Operating Conditions</h3>
          <li>Power Supply : 230V AC 1-Ø 50HZ</li>
        </ul><div className="technical-gallery"><PhotoButton src={"assets/img/staticpassbox.png"} alt={"Static pass box — additional product illustration"} cover={false} /></div><div className="detail-actions"><a className="button " href="contact.html?product=Static%20pass%20box">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "validations.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Engineering solutions</span></div><div className="eyebrow">Engineering solutions</div><h1>Testing &amp; validation</h1><p>Understand your environment with clean room testing and detailed documentation.</p></div></section><ServiceExperience route={"validations.html"} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/validations.png"} alt={"Testing & validation"} cover={false} /></div><a className="button " href="contact.html?product=Testing%20%26%20validation">Enquire about this service<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="service.html">All solutions <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Our solutions</h3><a href="cleanroomequipment.html" className="">Clean room solutions</a><a href="hvacservices.html" className="">HVAC &amp; air systems</a><a href="mepcontractors.html" className="">MEP contracting</a><a href="validations.html" className="current">Testing &amp; validation</a><a href="facilityengservices.html" className="">Facility maintenance</a></div></aside><article className="technical" id="service-details"><h3>Validations</h3>
        <p>AEMS offers a complete Clean room validation process to ensure that your controlled environment is performing as per user specifications. All testing,reports and certification is regulated by ou operating process which constitute port of our Quality Manual.</p>
        <p>Any parameter outstde the range will be reported and corrective measures will be taken immediately that will be put in a pos!tion to correct the irregular activity.</p>
        <ul>
          <h3>AEMS CLEAN ROOM TESTING SERVICES INCLUDES :</h3>
          <li> Air Velocity Measurement</li>
          <li> DOP/PAO HEPA Fiiter Integrity Test</li>
          <li> Particle Count Test</li>
          <li> Room Pressurization Test</li>
          <li> Air Exchange Rote</li>
          <li> Recovery Test</li>
          <li> Temperature and Humidity Test</li>
        </ul><div className="technical-gallery" /><div className="detail-actions"><a className="button " href="contact.html?product=Testing%20%26%20validation">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "verticallaminarflow.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>Vertical laminar flow</h1><p>HEPA-filtered vertical airflow for critical processes.</p></div></section><ProductShowcase product={products.find(p=>p[0]==="verticallaminarflow.html")} /><section className="section" data-section={0}><div className="wrap detail-grid"><aside className="detail-side"><div className="detail-photo"><PhotoButton src={"assets/img/vertical-l-f.png"} alt={"Vertical laminar flow"} cover={false} /></div><a className="button " href="contact.html?product=Vertical%20laminar%20flow">Enquire about this product<span><Icon name="arrowUpRight"/></span></a><a className="text-link" href="products.html">All products <span><Icon name="arrowUpRight"/></span></a><div className="side-links"><h3>Product catalogue</h3><a href="cleanroompanels.html" className="">Clean room panels</a><a href="galvanizedironCR.html" className="">GI clean room partitions</a><a href="cleanroomdoors.html" className="">Clean room doors</a><a href="horizontallaminarflow.html" className="">Horizontal laminar flow</a><a href="verticallaminarflow.html" className="current">Vertical laminar flow</a><a href="reverselaminarflow.html" className="">Reverse laminar flow</a><a href="staticpassbox.html" className="">Static pass box</a><a href="dynamicpassbox.html" className="">Dynamic pass box</a><a href="airshower.html" className="">Air shower</a><a href="biosafetycabinet.html" className="">Biosafety cabinet</a><a href="labfurniture.html" className="">Laboratory furniture</a><a href="airhandlingunit.html" className="">Air handling unit</a><a href="hvacsystems.html" className="">HVAC systems</a><a href="ssfurnitures.html" className="">Stainless steel furniture</a></div></aside><article className="technical" id="technical-details"><h3>Vertical Laminar Air Flow Unit</h3>
        <p>Vertical Laminar Air Flow Unit we manufacture, supply and fabricated using best quality materials. The Vertical Laminar Air Flow Unit offered by us is widely demand owing to its high end performance and reliability. Moreover, effort able price has been fixed for the Vertical Laminar Air Flow Unit</p>
        <ul>
          <h3>Specifications</h3>
          <li>High product protection by provision of ISO Class 5 particle free work area</li>
          <li>Able enough to handle critical process</li>
          <li>Protection for the samples and processes</li>
          <li>The work area is incessantly supplied with positive pressure HEPA filtered horizontal air flow</li>
          <li>vertical unidirectional airflow peed prevents contamination from operator and environment to work area</li>
          <li>Made available in powder coated Mild Steel and SS 304 / SS 316</li>
          <li>EU6 - Prefilter (95% down to 5 micron)</li>
          <li>EU14 - HEPA Filter - Supply (99.999% down to 0.3 micron)</li>
          <li>Dynamically balanced Motor-blower provided with suspension arrangement to minimize the noise level</li>
          <li>SS work table with due reinforcement</li>
          <li>Glass side panels</li>
          <li>Fluorescent Light with milky white diffuser</li>
          <li>Differential Pressure Gauge : 1 No</li>
          <li>On / Off Switch</li>
          <li>Clean Down Timer with Operation HOLD indicator</li>
          <li>DOP Test Port</li>
          <li>5/15 Amp switch socket for external equipment</li>
          <h3>Accessories Made Available:</h3>
          <li>Front doors (hinged/pneumatic cylinder)</li>
          <li>SS Air / Gas Cock</li>
          <li>U. V. Light with Hour Meter</li>
          <li>Digital Pressure Gauge in lieu of Magnehelic Gauges</li>
          <h3>Suitable For:</h3>
          <p>For handling of non hazardous products:</p>
          <li>Sensible to dust</li>
          <li>Susceptible to contamination where operator protection not necessary</li>
        </ul>
        <h3>Dimensions</h3>
        <div className="table-scroll" tabIndex={0} role="region" aria-label="Technical specifications. Scroll horizontally to see all columns."><table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Hepa Filter Area (L x W)</th>
                <th>Work Area Dimension <br />(L x W x H)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LCAT-CSVF-48-24</td>
                <td>1220 x 610 MM</td>
                <td>1320 x 760 x 685 MM</td>
              </tr>
              <tr>
                <td>LCAT-CSVF-36-24</td>
                <td>915 x 610 MM</td>
                <td>1015 x 760 x 685 MM</td>
              </tr>
            </tbody>
          </table></div>
        <ul>
          <h3>Operating Conditions</h3>
          <li>Air cleanliness : ISO Class 5 (ISO 14644-1:1999 (E))</li>
          <li>Air Velocities : 0.45 ± 0.05 mps</li>
          <li>Air Flow : Horizontal</li>
          <li>Noise Level : Less than 67 dB</li>
          <li>Vibration Level : Minimum</li>
          <li>Light intensity : &gt; 300 lux</li>
          <li>Power Supply : 230V AC 1-Ø 50HZ</li>
        </ul><div className="technical-gallery" /><div className="detail-actions"><a className="button " href="contact.html?product=Vertical%20laminar%20flow">Discuss your requirements<span><Icon name="arrowUpRight"/></span></a><button className="button light" id="print-specs" onClick={() => window.print()}>Print this page ↓</button></div></article></div></section><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "products.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Product catalogue</span></div><div className="eyebrow">Product catalogue</div><h1>Equipment that brings<br />your environment to life.</h1><p>Explore the complete AEMS clean room and HVAC equipment range. Find your product, review its specifications and discuss your requirements.</p></div></section><Catalogue /><section className="cta-section"><div className="wrap cta-box"><div><h2>Let’s engineer what’s next.</h2><p>A new facility. A smarter system. A better environment. Start with a conversation.</p></div><a className="button dark" href="contact.html">Discuss your project<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
case "missing.html": return (<div>
  <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><a href="index.html">Home</a><span>/</span><span>Page not found</span></div><div className="eyebrow">Page not found</div><h1>Let’s get you<br />to the right place.</h1><p>This page could not be found. Explore our complete range of solutions and products.</p></div></section><section className="section wrap" data-section={0}><div className="actions"><a className="button " href="index.html">Return home<span><Icon name="arrowUpRight"/></span></a><a className="button light" href="products.html">Browse products<span><Icon name="arrowUpRight"/></span></a></div></section>
</div>
);
default:return <PageMarkup route="missing.html"/>;}}
