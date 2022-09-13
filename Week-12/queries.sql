INSERT INTO CITIES (CITY, STATE) VALUES ("Pune", "MH");

INSERT INTO CITIES (CITY, STATE) VALUES ("Mumbai", "MH");

/*
MariaDB [WAREHOUSE]> SELECT * FROM CITIES;
+---------+--------+-------+
| CITY_ID | CITY   | STATE |
+---------+--------+-------+
|       1 | Pune   | MH    |
|       2 | Mumbai | MH    |
+---------+--------+-------+
*/

INSERT INTO WAREHOUSES (WAREHOUSE_NAME, LOCATION, EXTRA_CONTEXT, CITY_ID)
VALUES ("Tushar Warehouse", "Baner", '{"pin": "411007", "contact": "12345678"}', 1);

INSERT INTO WAREHOUSES (WAREHOUSE_NAME, LOCATION, EXTRA_CONTEXT, CITY_ID)
VALUES ("Gunjan Warehouse", "Aundh", '{"pin": "411006", "contact": "34567812"}', 1);

INSERT INTO WAREHOUSES (WAREHOUSE_NAME, LOCATION, EXTRA_CONTEXT, CITY_ID)
VALUES ("Pesto Warehouse", "Kharghar", '{"pin": "211000", "contact": "56781234"}', 2);

INSERT INTO WAREHOUSES (WAREHOUSE_NAME, LOCATION, EXTRA_CONTEXT, CITY_ID)
VALUES ("Company Warehouse", "Kalyan", '{"pin": "201000", "contact": "78123456"}', 2);

/*
MariaDB [warehouse]> SELECT * FROM WAREHOUSES;
+--------------+-------------------+----------+------------------------------------------+---------+
| WAREHOUSE_ID | WAREHOUSE_NAME    | LOCATION | EXTRA_CONTEXT                            | CITY_ID |
+--------------+-------------------+----------+------------------------------------------+---------+
|            1 | Tushar Warehouse  | Baner    | {"pin": "411007", "contact": "12345678"} |       1 |
|            2 | Gunjan Warehouse  | Aundh    | {"pin": "411006", "contact": "34567812"} |       1 |
|            3 | Pesto Warehouse   | Kharghar | {"pin": "211000", "contact": "56781234"} |       2 |
|            4 | Company Warehouse | Kalyan   | {"pin": "201000", "contact": "78123456"} |       2 |
+--------------+-------------------+----------+------------------------------------------+---------+
*/

INSERT INTO STORES (STORE_NAME, LOCATION_CITY, WAREHOUSE_ID) VALUES
("Store 1", "Kharadi", 1),
("Store 2", "Pune", 1),
("Store 3", "Kondhwa", 2),
("Store 4", "Mundhwa", 3),
("Store 5", "Camp", 3),
("Store 6", "Hadapsar", 4);

/*
MariaDB [warehouse]> SELECT * FROM STORES;
+----------+------------+---------------+--------------+
| STORE_ID | STORE_NAME | LOCATION_CITY | WAREHOUSE_ID |
+----------+------------+---------------+--------------+
|        1 | Store 1    | Kharadi       |            1 |
|        2 | Store 2    | Pune          |            1 |
|        3 | Store 3    | Kondhwa       |            2 |
|        4 | Store 4    | Mundhwa       |            3 |
|        5 | Store 5    | Camp          |            3 |
|        6 | Store 6    | Hadapsar      |            4 |
+----------+------------+---------------+--------------+
*/

INSERT INTO CUSTOMERS (CUSTOMER_NAME, ADDR, CUSTOMER_CITY) VALUES
("Mr. Patil", "Virbhadra Road", "Pune"),
("Mr. Sai", "SB Road", "Mumbai"),
("Mr. Tushar", "Shivajinagar", "Baner"),
("Mr. Gunjan", "Pune University", "Bhosari");

/*
MariaDB [warehouse]> SELECT * FROM CUSTOMERS;
+-------------+---------------+-----------------+---------------+
| CUSTOMER_ID | CUSTOMER_NAME | ADDR            | CUSTOMER_CITY |
+-------------+---------------+-----------------+---------------+
|           1 | Mr. Patil     | Virbhadra Road  | Pune          |
|           2 | Mr. Sai       | SB Road         | Mumbai        |
|           3 | Mr. Tushar    | Shivajinagar    | Baner         |
|           4 | Mr. Gunjan    | Pune University | Bhosari       |
+-------------+---------------+-----------------+---------------+
*/

INSERT INTO ORDERS (ORDER_DATE, CUSTOMER_ID) VALUES
(NOW(), 1),
(NOW(), 2),
(NOW(), 3),
(NOW(), 4),
(NOW() + INTERVAL 1 DAY, 1),
(NOW() + INTERVAL 2 DAY, 1),
(NOW() + INTERVAL 2 DAY, 2),
(NOW() + INTERVAL 2 DAY, 4);

/*
MariaDB [warehouse]> SELECT * FROM ORDERS;
+----------+---------------------+-------------+
| ORDER_ID | ORDER_DATE          | CUSTOMER_ID |
+----------+---------------------+-------------+
|       17 | 2022-09-13 23:59:47 |           1 |
|       18 | 2022-09-13 23:59:47 |           2 |
|       19 | 2022-09-13 23:59:47 |           3 |
|       20 | 2022-09-13 23:59:47 |           4 |
|       21 | 2022-09-14 23:59:47 |           1 |
|       22 | 2022-09-15 23:59:47 |           1 |
|       23 | 2022-09-15 23:59:47 |           2 |
|       24 | 2022-09-15 23:59:47 |           4 |
+----------+---------------------+-------------+
*/

INSERT INTO ITEMS (DESCRIPTION, WEIGHT, COST) VALUES
("Ata", 1.00, 60),
("Coriender", 0.250, 25),
("Detergent", 5.00, 300),
("Noodles", 0.200, 75),
("Poha", 1.00, 48),
("Rice", 1.00, 55),
("Sugar", 1.00, 38);

/*
MariaDB [warehouse]> SELECT * FROM ITEMS;
+---------+-------------+--------+--------+
| ITEM_ID | DESCRIPTION | WEIGHT | COST   |
+---------+-------------+--------+--------+
|       1 | Ata         |   1.00 |  60.00 |
|       2 | Coriender   |   0.25 |  25.00 |
|       3 | Detergent   |   5.00 | 300.00 |
|       4 | Noodles     |   0.20 |  75.00 |
|       5 | Poha        |   1.00 |  48.00 |
|       6 | Rice        |   1.00 |  55.00 |
|       7 | Sugar       |   1.00 |  38.00 |
+---------+-------------+--------+--------+
*/

INSERT INTO ITEMS_ORDERS (ORDERED_QUANTITY, ORDER_ID, ITEM_ID) VALUES
(5, 17, 1),
(10, 18, 2),
(1, 18, 5),
(2, 19, 3),
(3, 20, 4),
(2, 20, 5),
(25, 21, 6),
(8, 22, 7),
(1, 23, 2),
(4, 24, 6);

/*
MariaDB [warehouse]> SELECT * FROM ITEMS_ORDERS;
+---------------+------------------+----------+---------+
| ITEM_ORDER_ID | ORDERED_QUANTITY | ORDER_ID | ITEM_ID |
+---------------+------------------+----------+---------+
|             1 |                5 |       17 |       1 |
|             2 |               10 |       18 |       2 |
|             3 |                1 |       18 |       5 |
|             4 |                2 |       19 |       3 |
|             5 |                3 |       20 |       4 |
|             6 |                2 |       20 |       5 |
|             7 |               25 |       21 |       6 |
|             8 |                8 |       22 |       7 |
|             9 |                1 |       23 |       2 |
|            10 |                4 |       24 |       6 |
+---------------+------------------+----------+---------+
*/

INSERT INTO STORES_ITEMS (QUANTITY, STORE_ID, ITEM_ID) VALUES
(50, 1, 1),
(100, 1, 2),
(200, 1, 3),
(35, 2, 4),
(500, 3, 5),
(1000, 3, 6),
(500, 4, 7);

/*
MariaDB [warehouse]> SELECT * FROM STORES_ITEMS;
+---------------+----------+----------+---------+
| STORE_ITEM_ID | QUANTITY | STORE_ID | ITEM_ID |
+---------------+----------+----------+---------+
|             1 |       50 |        1 |       1 |
|             2 |      100 |        1 |       2 |
|             3 |      200 |        1 |       3 |
|             4 |       35 |        2 |       4 |
|             5 |      500 |        3 |       5 |
|             6 |     1000 |        3 |       6 |
|             7 |      500 |        4 |       7 |
+---------------+----------+----------+---------+
*/

-------------------------------------------------------------------------------
-----------------------------------QUERIES-------------------------------------
-------------------------------------------------------------------------------

-- Find the item that has minimum weight.
SELECT * FROM ITEMS WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);

/*
+---------+-------------+--------+-------+
| ITEM_ID | DESCRIPTION | WEIGHT | COST  |
+---------+-------------+--------+-------+
|       4 | Noodles     |   0.20 | 75.00 |
+---------+-------------+--------+-------+
*/

-- Find the different warehouses in “Pune”.
SELECT * FROM WAREHOUSES WHERE CITY_ID = (
    SELECT CITY_ID FROM CITIES WHERE CITY = "Pune"
);

/*
+--------------+------------------+----------+------------------------------------------+---------+
| WAREHOUSE_ID | WAREHOUSE_NAME   | LOCATION | EXTRA_CONTEXT                            | CITY_ID |
+--------------+------------------+----------+------------------------------------------+---------+
|            1 | Tushar Warehouse | Baner    | {"pin": "411007", "contact": "12345678"} |       1 |
|            2 | Gunjan Warehouse | Aundh    | {"pin": "411006", "contact": "34567812"} |       1 |
+--------------+------------------+----------+------------------------------------------+---------+
*/

-- Find the details of items ordered by a customer “Mr. Patil”.
SELECT * FROM ITEMS WHERE ITEM_ID IN (
    SELECT ITEM_ID FROM ITEMS_ORDERS WHERE ORDER_ID IN (
        SELECT ORDER_ID FROM ORDERS WHERE CUSTOMER_ID = (
            SELECT CUSTOMER_ID FROM CUSTOMERS WHERE CUSTOMER_NAME LIKE "%Patil"
        )
    )
);

/*
+---------+-------------+--------+-------+
| ITEM_ID | DESCRIPTION | WEIGHT | COST  |
+---------+-------------+--------+-------+
|       1 | Ata         |   1.00 | 60.00 |
|       6 | Rice        |   1.00 | 55.00 |
|       7 | Sugar       |   1.00 | 38.00 |
+---------+-------------+--------+-------+
*/

-- Find a Warehouse which has maximum stores.
SELECT * FROM WAREHOUSES WHERE WAREHOUSE_ID = (
    SELECT WAREHOUSE_ID FROM STORES WHERE WAREHOUSE_ID = (
        SELECT WAREHOUSE_ID FROM STORES GROUP BY WAREHOUSE_ID ORDER BY COUNT(*) DESC LIMIT 1
    ) LIMIT 1
);

/*
+--------------+------------------+----------+------------------------------------------+---------+
| WAREHOUSE_ID | WAREHOUSE_NAME   | LOCATION | EXTRA_CONTEXT                            | CITY_ID |
+--------------+------------------+----------+------------------------------------------+---------+
|            1 | Tushar Warehouse | Baner    | {"pin": "411007", "contact": "12345678"} |       1 |
+--------------+------------------+----------+------------------------------------------+---------+
*/

-- Find an item which is ordered for a minimum number of times.
SELECT * FROM ITEMS WHERE ITEM_ID = (
    SELECT ITEM_ID FROM ITEMS_ORDERS GROUP BY ITEM_ID ORDER BY COUNT(*) ASC LIMIT 1
) LIMIT 1;

/*
+---------+-------------+--------+-------+
| ITEM_ID | DESCRIPTION | WEIGHT | COST  |
+---------+-------------+--------+-------+
|       7 | Sugar       |   1.00 | 38.00 |
+---------+-------------+--------+-------+
*/

-- Find the detailed orders given by each customer.
SELECT O.ORDER_DATE, I.DESCRIPTION, C.CUSTOMER_NAME, C.CUSTOMER_CITY FROM ORDERS O
INNER JOIN CUSTOMERS C ON O.CUSTOMER_ID = C.CUSTOMER_ID
INNER JOIN ITEMS_ORDERS IOS ON IOS.ORDER_ID = O.ORDER_ID
INNER JOIN ITEMS I ON I.ITEM_ID = IOS.ITEM_ID
ORDER BY C.CUSTOMER_NAME ASC;

/*
+---------------------+-------------+---------------+---------------+
| ORDER_DATE          | DESCRIPTION | CUSTOMER_NAME | CUSTOMER_CITY |
+---------------------+-------------+---------------+---------------+
| 2022-09-13 23:59:47 | Noodles     | Mr. Gunjan    | Bhosari       |
| 2022-09-13 23:59:47 | Poha        | Mr. Gunjan    | Bhosari       |
| 2022-09-15 23:59:47 | Rice        | Mr. Gunjan    | Bhosari       |
| 2022-09-13 23:59:47 | Ata         | Mr. Patil     | Pune          |
| 2022-09-14 23:59:47 | Rice        | Mr. Patil     | Pune          |
| 2022-09-15 23:59:47 | Sugar       | Mr. Patil     | Pune          |
| 2022-09-13 23:59:47 | Coriender   | Mr. Sai       | Mumbai        |
| 2022-09-13 23:59:47 | Poha        | Mr. Sai       | Mumbai        |
| 2022-09-15 23:59:47 | Coriender   | Mr. Sai       | Mumbai        |
| 2022-09-13 23:59:47 | Detergent   | Mr. Tushar    | Baner         |
+---------------------+-------------+---------------+---------------+
*/
