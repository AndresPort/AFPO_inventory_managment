-- ---------------------------------------creacion de base de datos

create database dbAfpoInventaryManagementLite

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
categoryName VARCHAR(60) NOT NULL UNIQUE
)

-- ---------------------------------------TABLA KARDEX

create table kardex(
idKardex INT AUTO_INCREMENT PRIMARY KEY,
idProduct INT NOT NULL,
idCategory INT NOT NULL,
FOREIGN KEY(idCategory) REFERENCES category(idCategory) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idProduct) REFERENCES product(idProduct) ON DELETE CASCADE ON UPDATE CASCADE
)

-- ---------------------------------------TABLA ALMACEN

create table warehouse(
idWarehouse INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
contactNumber VARCHAR(15) NOT NULL UNIQUE,
address VARCHAR(125) NOT NULL
)


-- ---------------------------------------TABLA DETALLES DEL ALMACEN

create table warehouseDetails(
idWarehouseDetails INT AUTO_INCREMENT PRIMARY KEY,
idKardex INT NOT NULL,
FOREIGN KEY(idKardex) REFERENCES kardex(idKardex) ON DELETE CASCADE ON UPDATE CASCADE
)

-- ---------------------------------------TABLA PUNTO DE VENTA

create table salePoint(
idSalePoint INT AUTO_INCREMENT PRIMARY KEY,
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
idWarehouseDetails INT NOT NULL,
idSalePoint INT NOT NULL,
dateOfMovementRegister TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
FOREIGN KEY(idWarehouseMovement) REFERENCES warehouseMovement(idwarehouseMovement) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idWarehouseDetails) REFERENCES warehouseDetails(idWarehouseDetails) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idSalePoint) REFERENCES SalePoint(idSalePoint) ON DELETE CASCADE ON UPDATE CASCADE
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
idSalePoint INT NOT NULL,
idTypeOfMovement INT NOT NULL,
idWarehouseDetails INT NOT NULL,
idPaymentMethod INT NOT NULL,
totalPrice DECIMAL(12,2) NOT NULL,
FOREIGN KEY(idClient) REFERENCES client(idClient) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idSalePoint) REFERENCES salePoint(idSalePoint) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idTypeOfMovement) REFERENCES typeOfMovement(idTypeOfMovement) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idWarehouseDetails) REFERENCES warehouseDetails(idWarehouseDetails) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idPaymentMethod) REFERENCES paymentMethod(idPaymentMethod) ON DELETE CASCADE ON UPDATE CASCADE
)


create table billDetails(
idBillDetails INT AUTO_INCREMENT PRIMARY KEY,
idBill INT NOT NULL,
idKardex INT NOT NULL,
productsPrice DECIMAL(12,2) NOT NULL,
productQuantity INT NOT NULL,
FOREIGN KEY(idBill) REFERENCES bill(idBill) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(idKardex) REFERENCES kardex(idKardex) ON DELETE CASCADE ON UPDATE CASCADE
)
