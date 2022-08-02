let args = process.argv.slice(2);
//console.log(args)
//process.stdout.write('.\n'); 
if(args.length === 0) {
   console.log('No numbers Provided');
   process.exit();
}

for (let arg of args) {
 // console.log('arg:', typeof arg-0)
  if(!arg || isNaN(arg-0)  ) {
     console.log('An input is not a number:')
     process.exit();
  }


  if(arg < 0){ 
     console.log('An input is a negative number:')
     process.exit();
  }
}

const timer1 = (args) => {
 
  let count = 0;
  console.log(count)

  for (let arg of args) {
    count += (arg * 1000);

    setTimeout(()=> {
      process.stdout.write('.\n');
    },count)
  }

}

timer1(args)
//node timer1.js 10 3 5 15 9 
