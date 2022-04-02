import { toast } from 'react-toastify';

export const addedToCart = () => toast.success('Agregado al carrito.')

export const noStock = () => toast.error('No hay stock suficiente.')

export const errorPurchase = () => toast.error('Error, contacte a soporte.')

export const successfulPurchase = () => toast.success('Compra realizada correctamente.')