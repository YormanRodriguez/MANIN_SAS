export function reWhatsapp(telefono: string): string {
  const telefonoLimpio = telefono.replace(/\D/g, ''); // Elimina caracteres no numéricos
  return `https://wa.me/57${telefonoLimpio}?text=¡Hola!%20Quiero%20más%20información.`;
}