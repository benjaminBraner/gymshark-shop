import Swal from "sweetalert2";

export const showSuccessAlert = () => {
	Swal.fire({
	  title: 'Success!',
	  text: 'Your payment has been processed',
	  icon: 'success',
	//   position: 'top-end',
	  showConfirmButton: false,
	  timer: 2000,
	  timerProgressBar: true,
	  backdrop: `
	    rgba(0,123,255,0.1)
	  `,
	  customClass: {
	    popup: 'animate__animated animate__fadeInDown',
	    title: 'swal-title',
	    htmlContainer: 'swal-text',
	    icon: 'animate__animated animate__bounceIn'
	  },
	  showClass: {
	    popup: 'animate__animated animate__fadeInDown'
	  },
	  hideClass: {
	    popup: 'animate__animated animate__fadeOutUp'
	  },
	  didOpen: (toast) => {
	    toast.addEventListener('mouseenter', Swal.stopTimer)
	    toast.addEventListener('mouseleave', Swal.resumeTimer)
	  }
	});
   };
   
   // Estilos CSS necesarios
   const styles = `
	.swal2-popup {
	  padding: 1.5rem !important;
	  border-radius: 15px !important;
	  background: rgba(255, 255, 255, 0.95) !important;
	  backdrop-filter: blur(10px);
	  box-shadow: 0 8px 32px rgba(0, 123, 255, 0.1) !important;
	}
   
	.swal-title {
	  color: #2c3e50 !important;
	  font-size: 1.5rem !important;
	  font-weight: 600 !important;
	  margin-bottom: 0.5rem !important;
	}
   
	.swal-text {
	  color: #5f6368 !important;
	  font-size: 1rem !important;
	}
   
	.swal2-timer-progress-bar {
	  background: rgba(0, 123, 255, 0.5) !important;
	}
   
	.swal2-icon {
	  border: none !important;
	  margin-bottom: 1rem !important;
	}
   
	.swal2-icon.swal2-success {
	  border: none !important;
	}
   
	.swal2-success-circular-line-left,
	.swal2-success-circular-line-right,
	.swal2-success-fix {
	  background: transparent !important;
	}
   
	.swal2-success-ring {
	  border: 0.25em solid rgba(0, 123, 255, 0.3) !important;
	}
   
	.swal2-icon.swal2-success .swal2-success-line-tip,
	.swal2-icon.swal2-success .swal2-success-line-long {
	  background-color: #0077ff !important;
	}
   `;