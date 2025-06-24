-- ---------------------------------------creacion de base de datos

create database dbAfpoInventaryManagement

-- ---------------------------------------TABLA ROLES

create table role(
idRole INT auto_increment PRIMARY KEY,
rolName VARCHAR(100) NOT NULL UNIQUE
)

-- ---------------------------------------TABLA USUARIOS

create table user(
idUser INT AUTO_INCREMENT PRIMARY KEY,
userCode VARCHAR(10) NOT NULL UNIQUE,
password VARCHAR(60) NOT NULL,
idRole INT NOT NULL,
firstName VARCHAR(25) NOT NULL,
secondName VARCHAR(25),
lastName VARCHAR(25) NOT NULL,
secondLastName VARCHAR(25),
cedula VARCHAR(20) NOT NULL UNIQUE,
phoneNumber VARCHAR(20) NOT NULL,
email VARCHAR(125) NOT NULL UNIQUE,
FOREIGN KEY (idRole) REFERENCES role(idRole) ON DELETE CASCADE ON UPDATE CASCADE
)

-- ---------------------------------------TABLA CLIENTES

create table client(
idClient INT AUTO_INCREMENT PRIMARY KEY,
cedula  VARCHAR(20) NOT NULL UNIQUE,
phoneNumber VARCHAR(20) NOT NULL,
firstName VARCHAR(25) NOT NULL,
secondName VARCHAR(25),
lastName VARCHAR(25) NOT NULL,
secondLastName VARCHAR(25),
homeDirection VARCHAR(125) NOT NULL
)

-- ---------------------------------------TABLA PRODUCT

create table product(
idProduct INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
description VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL,
brand VARCHAR(100) NOT NULL
)

-- ---------------------------------------TABLA CATEGORY

create table category(
idCategory INT AUTO_INCREMENT PRIMARY KEY,
categoryName VARCHAR(60) NOT NULL UNIQUE,
)

-- ---------------------------------------TABLA KARDEX

create table kardex(
idKardex INT AUTO_INCREMENT PRIMARY KEY,
idProduct INT NOT NULL,
quantity INT NOT NULL,
type VARCHAR(80) NOT NULL,
FOREIGN KEY(idProduct) REFERENCES product(idProduct) ON DELETE CASCADE ON UPDATE CASCADE
)

-- ---------------------------------------TABLA ALMACEN

create table warehouse(
idWarehouse INT AUTO_INCREMENT PRIMARY KEY,
idKardex INT NOT NULL,
name VARCHAR(50) NOT NULL UNIQUE,
contactNumber VARCHAR(15) NOT NULL UNIQUE,
address VARCHAR(125) NOT NULL,
FOREIGN KEY(idKardex) REFERENCES kardex(idKardex) ON DELETE CASCADE ON UPDATE CASCADE
)

-- ---------------------------------------TABLA PUNTO DE VENTA

create table pointOfSale(
idPointOfSale INT AUTO_INCREMENT PRIMARY KEY,
idUser INT NOT NULL,
address VARCHAR(125) NOT NULL UNIQUE,
contactNumber VARCHAR(20)NOT NULL UNIQUE,
FOREIGN KEY(IdUser) REFERENCES user(idUser) ON DELETE CASCADE ON UPDATE CASCADE
)

-- ---------------------------------------TABLA TIPO DE MOVIMIENTO EN LA BODEGA

create table warehouseMovement(
idWarehouseMovement INT AUTO_INCREMENT PRIMARY KEY,
movementName VARCHAR(50) NOT NULL
)

-- ---------------------------------------TABLA REGISTRO DE MOVIMIENTO EN LA BODEGA

create table registerWarehouseMovement(
idRegisterWarehouseMovement INT AUTO_INCREMENT PRIMARY KEY,
idWarehouseMovement INT NOT NULL,
idWarehouse INT NOT NULL,
idPointOfSale INT NOT NULL,
dateOfMovementRegister TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
FOREIGN KEY(idWarehouseMovement) REFERENCES warehouseMovement(idwarehouseMovement) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idWarehouse) REFERENCES warehouse(idWarehouse) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idPointOfSale) REFERENCES pointOfSale(idPointOfSale) ON DELETE CASCADE ON UPDATE CASCADE
)


-- ---------------------------------------TABLA METODO DE PAGO

create table paymentMethod(
idPaymentMethod INT AUTO_INCREMENT PRIMARY KEY,
methodName VARCHAR(50) NOT NULL
)


-- ---------------------------------------TABLA TIPO DE MOVIMIENTO

create table typeOfMovement(
idtypeOfMovement INT AUTO_INCREMENT PRIMARY KEY,
movementName VARCHAR(50) NOT NULL
)

-- ---------------------------------------TABLA FACTURA

create table bill(
idBill INT AUTO_INCREMENT PRIMARY KEY,
idClient INT NOT NULL,
idPointOfSale INT NOT NULL,
idTypeOfMovement INT NOT NULL,
idProduct INT NOT NULL,
idPaymentMethod INT NOT NULL,
productPrice DECIMAL(12,2) NOT NULL,
productQuantity INT NOT NULL,
totalPrice DECIMAL(12,2) NOT NULL,
FOREIGN KEY(idClient) REFERENCES client(idClient) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idPointOfSale) REFERENCES pointOfSale(idPointOfSale) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idTypeOfMovement) REFERENCES typeOfMovement(idTypeOfMovement) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idProduct) REFERENCES product(idProduct) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idPaymentMethod) REFERENCES paymentMethod(idPaymentMethod) ON DELETE CASCADE ON UPDATE CASCADE
)


-- ---------------------------------------TABLA PROVEEDOR

create table supplier(
idSupplier INT AUTO_INCREMENT PRIMARY KEY,
nit VARCHAR(25) NOT NULL,
name VARCHAR(125) NOT NULL,
contactNumber VARCHAR(20) NOT NULL,
address VARCHAR(125) NOT NULL
)

-- ---------------------------------------TABLA CONTRATO CON PROVEEDOR

create table supplierContract(
idSupplierContract INT AUTO_INCREMENT PRIMARY KEY,
idPointOfSale INT NOT NULL,
idSupplier INT NOT NULL,
description VARCHAR(250) NOT NULL,
contractDuration VARCHAR(125) NOT NULL,
creationDate TIMESTAMP NOT NULL,
FOREIGN KEY(idPointOfSale) REFERENCES pointOfSale(idPointOfSale) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idSupplier) REFERENCES supplier(idSupplier) ON DELETE CASCADE ON UPDATE CASCADE
)


-- ---------------------------------------TABLA PETICION DE PRODUCTOS AL PROVEEDOR

create table requestProductSupplier(
idRequestProductSupplier INT AUTO_INCREMENT PRIMARY KEY,
idSupplier INT NOT NULL,
idPointOfSale INT NOT NULL,
idWarehouse INT NOT NULL,
idKardex INT NOT NULL,
requestDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
totalPrice DECIMAL(12,2) NOT NULL,
FOREIGN KEY(idSupplier) REFERENCES supplier(idSupplier) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idPointOfSale) REFERENCES pointOfSale(idPointOfSale) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idWarehouse) REFERENCES warehouse(idWarehouse) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idKardex) REFERENCES kardex(idKardex) ON DELETE CASCADE ON UPDATE CASCADE
)
