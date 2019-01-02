UPDATE accounts SET balance = balance - 100.00
    WHERE name = 'ABDELAZIZ';
UPDATE branches SET balance = balance - 100.00
    WHERE name = (SELECT branch_name FROM accounts WHERE name = 'AMINE');
UPDATE accounts SET balance = balance + 100.00
    WHERE name = 'AYOUB';
UPDATE branches SET balance = balance + 100.00
    WHERE name = (SELECT branch_name FROM accounts WHERE name = 'HAMZA');

BEGIN;
    UPDATE accounts SET balance = balance - 100.00
        WHERE name = 'ABDELAZIZ';
    UPDATE branches SET balance = balance - 100.00
        WHERE name = (SELECT branch_name FROM accounts WHERE name = 'AMINE');
    UPDATE accounts SET balance = balance + 100.00
        WHERE name = 'AYOUB';
    UPDATE branches SET balance = balance + 100.00
        WHERE name = (SELECT branch_name FROM accounts WHERE name = 'HAMZA');
COMMIT;

BEGIN;
	DO $$
	DECLARE
		myid INTEGER := 10;
		price REAL :=0;
		sold REAL :=0;
	BEGIN
		INSERT INTO commande (date_commade, client_fk) values (NOW(), 2);
		select currval(pg_get_serial_sequence('commande','id_command')) into myid;
		
		SELECT prix into price from produit where id_produit=3;
		SELECT solde into sold from client where id_client=1;
		
		IF (price*3) > sold THEN
			ROLLBACK;
		END IF;
		
		INSERT INTO ligne_commande (id_produit, id_commande, qte) values (3, 1, 3);
		UPDATE client set solde= solde - (price*3) where id_client=1;
	END
	$$;
COMMIT;