import { useEffect, useRef } from 'react';

const NaverMap = () => {
  const mapElement = useRef(null);
  const { naver } = window;

  useEffect(() => {
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.5580297, 126.935877);

    const map = new naver.maps.Map(mapElement.current, {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={mapElement} id='map' style={{ width: '300px', height: '200px' }}></div>;
};

export default NaverMap;
