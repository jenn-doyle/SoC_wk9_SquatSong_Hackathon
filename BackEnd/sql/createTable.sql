CREATE TABLE Books (
    Id SERIAL PRIMARY KEY,
    Title TEXT,
    Author TEXT
);

INSERT INTO
    Books (Title, Author)
VALUES
    ('Like Authoring a Bike', 'Ben P. Lee'),
    ('Sapiens', 'Ben Noah'),
    ('Last Light', 'Alex Scarrow'),
    ('Rama Revealed', 'Arthur C. Clarke');