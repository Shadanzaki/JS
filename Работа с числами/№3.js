g = 0
f = 1048

max = Math.max(f,g) + 1
min = Math.min(f,g) + 1
range = Math.abs(max - min)
random_num = Math.floor(Math.random() * range + min)
ost = 1 - (random_num % 2)
num_in_range = (random_num - ost)
console.log(max)
console.log(min)
console.log(range)
console.log(random_num)
console.log(ost)
console.log(num_in_range)

