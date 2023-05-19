import Swal from 'sweetalert2';
// import * as WorkboxWindow from 'workbox-window';
import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    Swal.fire({
      icon: 'warning',
      title: 'Your browser not support this application',
      text: 'Use another borwser!',
    });
    return;
  }

  // const wb = new WorkboxWindow.Workbox('/sw.bundle.js');
  const wb = new Workbox('/sw.bundle.js');
  // await wb.register();
  try {
    await wb.register();
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Failed to register service worker',
      text: error,
    });
  }
};

export default swRegister;
