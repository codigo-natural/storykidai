export const SvgIcons = {
  ghost: (
    <svg
      width="30" // Ancho del SVG
      height="30" // Altura del SVG
      viewBox="0 0 24 24" // Vista previa del SVG, define el tamaño del contenido
      fill="none" // No rellena el contenido del SVG
      stroke="currentColor" // Color del trazo del contenido del SVG
      strokeWidth="2" // Ancho del trazo del contenido del SVG
      strokeLinecap="round" // Forma del extremo del trazo del contenido del SVG
      strokeLinejoin="round" // Forma de unión del trazo del contenido del SVG
      className="lucide lucide-ghost text-white"> // Clases CSS para estilizar el SVG
      <path d="M9 10h.01" /> // Ruta del contenido del SVG
      <path d="M15 10h.01" /> // Ruta del contenido del SVG
      <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" /> // Ruta del contenido del SVG
    </svg>
  ),
  bone: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fcfcfc"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-bone">
      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" /></svg>
  ),
  arrowRight: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fcfcfc"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-arrow-right">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  arrowLeft: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fcfcfc"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-arrow-left">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  ),
  playIcon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round" className="lucide lucide-play">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  ),
  pauseIcon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-pause">
      <rect
        x="14"
        y="4"
        width="4"
        height="16"
        rx="1" />
      <rect
        x="6"
        y="4"
        width="4"
        height="16"
        rx="1" />
    </svg>
  )
  // Aquí puedes agregar más iconos en formato SVG, siguiendo el mismo patrón.
}