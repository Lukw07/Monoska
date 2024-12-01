// EngineeringInfo.jsx
import React from 'react';

const EngineeringInfo = () => {
  return (
    <section className="section">
      <div className="section-title">
        <h2>Konstrukce a Vývoj</h2>
      </div>
      <div className="section-content">
        <div className="info-block">
          <h3>Softwarové vybavení</h3>
          <p>
            Konstruujeme primárně v programu <strong>SolidEdge</strong>, k dispozici máme i licence <strong>SolidWorks</strong> a <strong>KeyCreator</strong>.
            Programování CNC strojů pak probíhá v CAM programech <strong>Surfcam</strong> a <strong>NXcam</strong>.
          </p>
        </div>
        
        <div className="info-block">
          <h3>Tým konstruktérů</h3>
          <p>
            Máme stálý tým konstruktérů kombinující zkušenost s moderním přístupem.
          </p>
        </div>

        <div className="info-block">
          <h3>Spolupráce se zákazníkem</h3>
          <p>
            Našim zákazníkům prezentujeme podobu technického provedení projektu, zapracováváme jejich připomínky, a to ve všech fázích realizace,
            počínaje přípravou projektu před objednáním, až po dobu „ostré“ výroby.
          </p>
        </div>

        <div className="info-block">
          <h3>Dokumentace</h3>
          <p>
            Příslušná dokumentace dle charakteru zakázky je samozřejmostí – návody k použití, plány údržby, seznam kritických dílů, analýzy rizik,
            příslušné certifikáty a další.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineeringInfo;
