import React, { useEffect, useRef } from 'react';

const AdBanner = () => {
    const bannerRef = useRef(null);

    useEffect(() => {
        if (bannerRef.current && !bannerRef.current.firstChild) {
            const conf = document.createElement('script');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = "https://www.highperformanceformat.com/006575a4fb57b70063b67560a7acce6b/invoke.js";

            conf.innerHTML = `
        atOptions = {
          'key' : '006575a4fb57b70063b67560a7acce6b',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;

            if (bannerRef.current) {
                bannerRef.current.append(conf);
                bannerRef.current.append(script);
            }
        }
    }, []);

    return (
        <div className="flex-center" style={{ margin: '40px 0', minHeight: '250px' }}>
            <div ref={bannerRef} />
        </div>
    );
};

export default AdBanner;
