export const loadScript = (src: string) => {
  const $script = document.createElement('script');
  $script.async = false;
  $script.src = src;
  document.body.appendChild($script);
  return new Promise((resolve, reject) => {
    $script.onload = () => {
      resolve(true);
    };
  });
};
