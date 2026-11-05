type PaymentMethodType = "debito" | "credito" | "efectivo";

interface IProductoBase {
  price: number;
  paymentMethod: PaymentMethodType;
  nameClient: string;
}

type ProductoBaseType = {
  price: number;
  paymentMethod: PaymentMethodType;
  nameClient: string;
};

//Herencia

interface Fisica extends IProductoBase {
  productName: string;
  clientAddress: string;
  quantity: number;
}

type virtual = ProductoBaseType & {
  templateName: string;
  format: "jpg" | "png" | "pdf";
};

class productoFisico implements Fisica {
  price: number = 0;
  paymentMethod: PaymentMethodType = "debito";
  nameClient: string = "";
  productName: string = "";
  clientAddress: string = "";
  quantity: number = 0;
}

class productoVirtual implements virtual {
  price: number = 0;
  paymentMethod: PaymentMethodType = "debito";
  nameClient: string = "";
  templateName: string = "";
  format: "jpg" | "png" | "pdf" = "jpg";
}
