function find_max(nums) {
    
     let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
     for (let num of nums) {
     if (num > max_num) {
        max_num = num;
     }
     }
     return max_num;
     }

     var array = [3,3,4,5,56];
     let value =40;
     const constantValue = 0;
     let booleanValue = true;
     //constantValue=0;
     console.log(find_max(array));
     console.log("This is value "+value);
     console.log("This is constant "+constantValue);




    let person = {
        name:"rakesh",
        age: 20,
        dob: "22/10/1994"
    }

    console.log(person);
    person.age = 30;
    person['name'] = 'Rajesh'
    console.log(person);



    //arrays
    let selectedColors = ['red','blue','green'];
    selectedColors[5] =  'black'
    console.log(selectedColors[4]);






    
