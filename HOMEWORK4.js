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
    function calcRectangleArea(width, height){
        let areaRectanglea = width*height/2;
       console.log(areaRectanglea);
    }
    calcRectangleArea(4,8);
    try{
    calcRectangleArea();
    }
    catch(error){
        console.log(error.name);
        console.log(error.message);
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
        else{alert('Welcome')};
            return userAge;
    }
    try {
        let result = checkAge();
        console.log(result);
    }
    catch(exception) {
        
        console.log(exception.name);
        alert(exception.message);
        console.log(exception.stack);
    }
     // Task 3
     class MonthException {
         constructor(nameMonth) {
             this.month = nameMonth;
         }
         showMonth(){
             switch(this.month){
             case 1:
                 console.log('January');
                 break;
                 case 2:
                     console.log('February');
                     break;
                     case 3:
                        console.log('March');
                        break;
                        case 4:
                            console.log('April');
                            break;
                            case 5:
                     console.log('FMay');
                     break;
                     case 6:
                     console.log('June');
                     break;
                     case 7:
                     console.log('july');
                     break;
                     case 8:
                     console.log('August');
                     break;
                     case 9:
                     console.log('September');
                     break;
                     case 10:
                     console.log('October');
                     break;
                     case 11:
                     console.log('November');
                     break;
                     case 12:
                     console.log('December');
                     break;}
             }
            }
            let month = new MonthException(2);
            console.log(month.showMonth());
            try{
                month.showMonth();
                
            }
            catch(exception){
               console.log(exception.name);
               console.log(exception.message);
               console.log(exception.stack);
            }
           
    //Task 4
    
    // function showUser (id){
    //     let array2 = [];
    //     for (let i = 0; i < 10; i++) {
    //    array2.unshift(+prompt('Enter your ID', ''));
    //       console.log(array2);  
    // }}
            
    //          showUser();  
                    
    function showUser (id){
        let array2 = [];
        let userId = +prompt('Enter your ID', '');      
          if (userId > 0){
             
        array2.push(userId++);
                
            }
            else{console.log('Invalid value');
       };
        console.log(array2);    
    }
            showUser();  
                    
                    
                    