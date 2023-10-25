import { useEffect } from 'react';

const NaverMap = () => {
  useEffect(() => {
    const location = new naver.maps.LatLng(37.5580297, 126.935877);

    const map = new naver.maps.Map('map', {
      center: location,
      zoomControl: true,
      zoom: 15,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.5580297, 126.935877),
      map: map,
    });
  }, []);

  return <div id='map' style={{ width: '300px', height: '200px' }}></div>;
};

export default NaverMap;
