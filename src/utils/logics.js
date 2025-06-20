// export function setupLocomotiveScroll(loaderVisible) {
//   if (!loaderVisible) return;

//   const LocomotiveScroll = require('locomotive-scroll').default;

//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//   });

//   window.locomotive = scroll;

//   const resizeObserver = new ResizeObserver(() => {
//     scroll.update();
//   });
//   resizeObserver.observe(document.body);

//   return () => {
//     scroll.destroy();
//     resizeObserver.disconnect();
//   };
// }

export function setupLoader(setLoaderVisible, delay = 4200) {
  const timer = setTimeout(() => {
    setLoaderVisible(false);
  }, delay);
  return () => clearTimeout(timer);
}

export function toggleBodyScroll(menuOpen) {
  document.body.style.overflow = menuOpen ? 'hidden' : '';
}

export function handleElemMouseEnter(ref, setFixedBg, image) {
  if (ref.current) {
    ref.current.style.display = 'block';
    setFixedBg(image);
  }
}

export function handleElemMouseLeave(ref, setFixedBg) {
  if (ref.current) {
    ref.current.style.display = 'none';
    setFixedBg('');
  }
}
