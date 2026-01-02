num=int(input("enter a non negative number:"))
fact=1
i=1
if num<0:
   print("enter a non negative number:")
elif num==0 or num==1:
   print(fact)
else:
    while i<=num:
      fact*=i
      i+=1
    print(fact) 






























