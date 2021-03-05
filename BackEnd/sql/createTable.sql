CREATE TABLE Songs (
    Id SERIAL PRIMARY KEY,
    Title TEXT,
    Artist TEXT,
    SongLengthCode INT,
    Link VARCHAR,
    SuggestedBy TEXT
);

INSERT INTO
    Songs (Title, Artist, SongLengthCode, Link, SuggestedBy)
VALUES
--  //  Create code for time buckets (1 = 0-60 secs)(2 =61-90 )(3 =91-120 )(4 =121-150 )(5=151-180)(6=181-210)(7=211-240)(8=241-270) - must be converted on Input Componenets - front end 
    ('Save Your Tears', 'The Weekend', 8, 'https://www.youtube.com/watch?v=XXYlFuWEuKI&list=RDCLAK5uy_mkLtojKLOUUGwnu3ZnN5AaODijlieB-aQ&index=5', 'Craig Farrell'),
    ('We`re Good', 'Dua Lipa', 6, 'https://www.youtube.com/watch?v=jr47YisIsz8&list=RDCLAK5uy_mkLtojKLOUUGwnu3ZnN5AaODijlieB-aQ&index=11', 'Craig Farrell'),
    ('Red Alert', 'Basement Jaxx', 7, 'https://www.youtube.com/watch?v=SJyhZ-3Z8A8', 'Jenn Doyle'),
    ('Go Your Own Way', 'Fleetwood Mac', 7, 'https://www.youtube.com/watch?v=6ul-cZyuYq4', 'Jenn Doyle'),
    ('Let`s Dance', 'David Bowie', 8, 'https://www.youtube.com/watch?v=VbD_kBJc_gI', 'Bob Bobson III');

-- //ADDITIONALS//
INSERT INTO
    Songs (Title, Artist, SongLengthCode, Link, SuggestedBy)
VALUES
    ('Spray Paint','Black Flag',1,'https://www.youtube.com/watch?v=fmfxGn2gUl4','John McLOUD'),
    ('Elizabeth My Dear','Stone Roses',1,'https://www.youtube.com/watch?v=t7Xi1Jt9lXM','JenBamin'),
    ('Lazing on a Sunday Afternoon','Queen',2,'https://www.youtube.com/watch?v=OU6EyXcFBxA','Liam Morley'),
    ('Three Girl Rhumba','Wire',2,'https://www.youtube.com/watch?v=ctpzzTR15yo','Nathan Hinks'),
     ('','',3,'',''),
    ('','',3,'',''),
       ('','',4,'',''),
    ('','',4,'',''),
       ('','',5,'',''),
    ('','',5,'',''),
       ('','',6,'','');

    

CREATE TABLE MoQuotes (
    Id SERIAL PRIMARY KEY,
    Quote TEXT
);

INSERT INTO
    MoQuotes (Quote)
VALUES
    ('Live Your Life'),
    ('You know it`s real when you are who you think you are!'),
    ('Work until your bank account looks like a phone number'),
    ('There are no regrest in life just lessons'),
    ('Try and Fail, but never fail to try'),
    ('Sometimes it`s impossible until it`s done'),
    ('Drop it like it`s hot'),
    ('Squat so hard that you can`t feel your toes');