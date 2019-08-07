sumRecursive 0 = 0
sumRecursive n = sumRecursive (n - 1) + n

eqList [] [] = True
eqList [] (y:[]) = False
eqList (x:[]) [] = False
eqList (x:xs) (y:ys) = 
    if x == y 
        then eqList xs ys
        else False

reverseList [] = []
reverseList (x:[]) = [x]
reverseList (x:xs) = (reverseList xs) ++ [x]

palindrome x = eqList x (reverseList x)

maxOfList [] = 0
maxOfList (x:[]) = x 
maxOfList (x:xs) = 
    if x > maxOfList xs 
        then x 
        else maxOfList xs

minOfList [] = 0
minOfList (x:[]) = x 
minOfList (x:xs) = 
    if x < minOfList xs 
        then x 
        else minOfList xs

main = do
    (putStrLn . show . palindrome) "ovvo"
    putStrLn "lol"

