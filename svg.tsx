import React, { useEffect } from 'react';

function C() {
  useEffect(() => {
    const bannerSVGLogo = document.getElementById('bannerSVGLogo');
    const l = "/imagine close up, modern cowboy on a ranch, his eyes are filled with the cosmos, realistic\n/imagin、son Chan"
      .split('\n')
      .map((e) => e.replace(/\t/g, '    '));
    const u = b.split('\n').map((e) => e.replace(/\t/g, '    '));
    let c = [];
    let d = [];
    w();
    window.addEventListener('resize', w);
    requestAnimationFrame(x);
    return () => {
      window.removeEventListener('resize', w);
    };
  }, []);

  return (
    <svg
      id="bannerSVGLogo"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 400 90"
      style={{ width: '100%' }}
    />
  );
}
