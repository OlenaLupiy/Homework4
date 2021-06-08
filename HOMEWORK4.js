//Task1
try {
    function calcRectangleArea(width, height){
         let areaRectanglea = width*height/2;
        console.log(areaRectanglea);
    }
    calcRectangleArea(4,l);
    }
    catch(error){
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }
    
    //Task1.1
    //Task1.1
function calcRectangleArea(width, height){
    if (isNaN(width) || isNaN(height)){
        throw 'Parameter ia not a number'
    }
    return width*height/2;
}

try{
alert(calcRectangleArea(3, 'o'));
}
catch(error){
    console.log(error);
}
    
    //Task1.3
    function calcRectangleArea(width, height){
        let areaRectanglea = width*height/2;
       return areaRectanglea;
    }
    console.log(calcRectangleArea(4,8));
    try{
        calcRectangleArea();
        }
        catch(error){
            console.log(error.name);
            console.log(error.message);
        }
        
    
    //Task2
    function checkAge(){
        let userAge = prompt('Enter your age', '');
        if (userAge=== ''){
            throw new Error('The field is empty! Please, enter your age');       
        }
        else if (isNaN(userAge)){
            throw new Error('This is not a number');
        }
        else if(userAge<14 && userAge>0){
            throw new Error('You are too young');
        }
        alert('Welcome');
                    return userAge;
    }
    console.log(checkAge());
    try {
        
        сheckAge();
    }
    catch(exception) {
        
        console.log(exception.name);
        alert(exception.message);
        console.log(exception.stack);
    }

    // Task 2.1

    function checkAge1(){
        try{
        const userAges = prompt('Enter your age', '');
        if (userAges === ''){
            throw new Error('The field is empty! Please, enter your age');
        }
        else if (isNaN(userAges)){
            throw new Error('This is not a number');
        }
        else if (userAges < 14){
            throw new Error('You are too small');
        }
        alert('Enjoy the movie');
    }
    catch(error){
        alert(error.name+ ''+ error.message)
    }}
    checkAge1();

     // Task 3
     class MonthException {
         constructor(message) {
             this.message = message;
             this.month = 'MonthException';
         }
        }
         function showMonthName(month){
             month = month-1;
             let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Jec'];
             if (months[month] !== undefined){
                 return months[month];
             }
             else {
                 throw new MonthException('Incorrect month number')
             }
            }
             
            
            try{
                let myMonth = 14;
               let monthName = showMonthName(myMonth);
               console.log(monthName);
                
            }
            catch(exception){
               console.log(exception.name);
               console.log(exception.message);
               console.log(exception.stack);
            }
           
    //Task 4
    
    function showUser (id){
        if (id < 0){
            throw new Error('ID must be not negative' + id);
        }
        return {id : id};
    }
                                           
    function showUsers(ids){
        let result = [];
        ids.forEach(function (id) {
            try {
                let person = showUser(id);
                result.push(person);
            }
            catch(exception){
                console.log(exception.message);
            }
            
        });
          return result;
    }
    showUsers([8, 56, 89, -5])      
            
                    
                    
                    