aa = 0
ab = 0
ad = 0

def func_aa(ac):
    if ac <= 1:
        aa = ac
    if ac > 1:
        ab = ac
        ab -= 1
        aa = func_aa(ab)
        ab -= 1
        ab = func_aa(ab)
        aa += ab
    return aa

ad = int(input())
ad = func_aa(ad)
print(ad)
