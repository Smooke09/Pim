import Swal from "sweetalert2";

// Error card no centro da tela
export function Error({ message }) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
}

// Card no topo da pagina
export function ErrorCard({ message, type }) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    imageWidth: 100,
    imageHeight: 100,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: type,
    title: message,
  });
}

// Sucess

export function Success({ message }) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    imageWidth: 100,
    imageHeight: 100,

    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: message,
  });
}
