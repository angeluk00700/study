test_list = [
    {"name": "jay", "age": "20", "name_flg": True},
    {"name": "kay", "age": "21", "name_flg": True},
    {"name": "may", "age": "22", "name_flg": False},
    {"name": "ray", "age": "23", "name_flg": True},
]

filter_flg = [item for item in test_list if item["name_flg"] == False]
print(type(filter_flg))
print(f"len {len(filter_flg)} / type= {type(filter_flg)}")

filter_lam_flg_list = list(filter(lambda el: el["name_flg"] == True, test_list))
# print(f"len {len(filter_lam_flg)} / type= {type(filter_flg)}")

for item in filter_lam_flg_list:
    print(f"item= {item}")
