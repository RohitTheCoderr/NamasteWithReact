### Before starting React you must be know some topic of javascript like
# => Basics of JavaSscript
 * Variables
  > var
  > let
  > const
 * Hoisting of variables

# => Functions in js
 * Arrow Functions
 * Higher order Functions

# => arrays and Objects
 * Array Destructuring
 * Object Destructuring
 * rest Operator
 * Spread Operator

# => Conditions in JavaScript
 * if else
 * ternary operator
 * using && and ||
 * Optional Chaining

# => Arrays Methods
 * map()
 * reduce()
 * filter()
 * sort()

 # => Event Listeners
  * onClick
  * onBlur 
  * onChange
  * onFocus

 # => setTimeOut() & setInterval()
 # => Event Bubbling & Capturing in javascript

 # => Asynchronous Events
  * Callbacks
  * Callbacks Hell
  * promises
  * promise APIs

 # => Async await 
 # => try & catch : its use for error handling 





# parcel:-
- parcel is created for us 
1. Dev Build
2. Local server
3. HXR = hot module Replacement
4. file watching Algorithm- writien in C++
5. Caching- faster Buildes
6. Image Optimization
7. Minification
8. Bundling
9. Compress
10. consistent Hashing
11. Code Splitting 
12. Differential Bundling - support older browsers
13. Diagnostic 
14. error Handling
15. HTTPs
16. Tree Shaking - remove unused code 


## Namaste Food App structure
* Header
- Logo
- Nav Items
* Body
- search
- ResturentContainer
   - Img
   - Name of resturent, Star rating, cuisine, delivery time
* Footer
- copyright
- link
- Address
- contact 

{/* <ResContainer resData={resList[1]}/>   */}
        {/* more better below code */}
          {/* <ResContainer resData={resList[Math.floor(Math.random() * resList.length)-1]} /> */}
          {/* But best below code */}

#### TYPE OF EXPORT/IMPORT ####

# two type of export/import
1. *** Default Export/Import ***
export default Component;
import Component from "path"

2. *** Named Export/Import ***
export const Component;
import {Component} from "path";

### React Hooks #### 
(Normal js utility function)
- useState() - Superpowerful state Variables in react 

- useEffect() -
* case1 -->  if no dependency array ==> useEffect is called on every render  
like--->   useEffect(()=> //any opration can perform here )

* case 2 -->  if dependency array is empty = []  ==> useEffect is called on initial render (just once) 
like---->  useEffect(()=> {// any opration can perform here }, [])


* case 3 -->  if dependency array is useState variavle like {btnNameReact}  ==> useEffect is called everytime when btnNameReact is updated
like----> 
const {btnNameReact, setBtnNameReact} = useState('login')

useEffect(()=>{// any opration can performe here},[btnNameReact])
<!-- note:- here btnNmarReact's value is change(updated) then useEffect is also called on every updating -->

# note:- 
whenever state Variable update react triggers a reconciliation cycle (re-rander) my component that's why we call superpowerful state variavle 

## Class Component in react
class-component: - what is class component:- ans is It's a Normal javascrit class 
* class className  extends React.Component {
   render(
      return(){
         <>
         here our (jsx) code
         </>
}
   )
}

# extends React.Component ==>> 
when we do this extends React.Component that is become a class based component 
and in the class component we have a render() method that is return peice of jxs
but before render method we also define a constructor 
 //  we achive a props value in constructor as argument(parameter)
 //  // this is very imporant to define a super keyword in constructor

# note:- when class is load the constructor is called and after that render method is called
firstOf all constructor is called then after render method is called

If the parent component is also createed based on class base component so follow the same extention first of all constructor is called and after render method is called so this is the lify cycle react is work

# in the class basedf component 
we have also one another method that is called componentDidMount
It is called after render method

# explain lify cycle in react
first of all load the class component and firstly constructor is called --> render is called and after componentDidMount method is called

but if the parent class have a also componentDidMount method so lify Cycle is different like
class component is load and thair constructor is called --> afeter render method is called --> then after goto the child class component because in the parent class component inside the render  method child class component is linked so thats why goto to child class component and called constructor -> render method -> componentDidMount(child)--> after that parent componentDidmount(parent) is called 
this is lify cycle in react 
you know how it's work 

# componentDidMount:-- But one more question why we use compnentDidMount method in class component ??
ans:- ans is for call tha Api call
* but one more ques but why???????????
# note:- Before knowing this go to the function component where how we call APi data (in the function component we call the api inside useEffect hooks rigth)

same we call the APi in class component inside componentDidMount method 
# componentDidMount:-
componentDidMount in called after render method right

But support parent class compnent have a 2 or more child component then what is lify cycle ??
ans first of all parent constructor is called=> parent render method is called and if the child comnponent is avaiable then go  to the child component load and child constructor is called and their render method is called after before child componentDidMount method calling go to the second child component and call thair constructor and render method and again check any more child is avaiable or not if any child is avaiable so goto same follow that but if no any remender child then first => second => any child => componentDidMount method called this series and in the last parent componentDidMount methos is called

this is the actual lify cycle of react

# one more questions why react is doing like that
 ans Actully there are two phase lify cycles 
 1. Render Phase:- pure and has side effects may be paused aborted or restarted bu React 
 2. Commit Phase :- Can work with DOM, run side effects, schedule updates.

  # Render-phase :--> in the render phase 
  constructor called after Render method is called
  # Commit phase:--> in the Commit phase
  React updates DOM and refs then after componentDidMount is called 

  ## Note:- you know before componentDidMount is calling DOM is updated then after  compponentDidMount is called ok

# note:- 
you know at the first time when componentDidMount is called then they provide a dummy data when we pass indise this but when the fetch data then Updating it and provide a new data 
but when we go to the another page means anotherparent coponent then componetDidMount is alos called again and again but it is not good if they called again and again then our server is hanged
for the issue we have aanother method that is called a UncomponentWillmount() 
it is use for sollving this problem It is use to UnMouonting ok


#   NOTE:-
 when ever we need a build a large scale of application like thousands of component then we need of lazy method its is very helpfull for create a large scale of application by using this we chunking the component and less the js storage in a single file because this method is chunking the component. 

## NOte:- WHAT IS LAZY ????
ans:-   lazy is a function which is given to as by react. this lazy comes from are react packegs. it is comes as a name export. we will  import inside [] bracket in react. and now this lazy takes a callback function and over hare I can import
# (but ye import dusre vale import se alag h jise ham simply import karte h ) 
but this import is basically a function and this function takes path of this component where for the use it lazy function ok 
example:- const Grocery=lazy(()=>import("./components/grocery"))

# Note:- this is very powerfull because when we loads our application so javascript store all component inside. but lazy component is not load in the js file they take a another file in same few space(memory) 
but ye jab load hota h jab hame eski actual me need hoti h esse and  they take a few chunk of memory in a seprate that why we also called it=> on demand loading. 
and there are also different name like
  * chunking
  * code splitting
  * Dynamic Bundling
  * lazy loading
  * on demand loading
  * dynamic import


but for loading it consume same time in this time we show on this screen something else like loading... ect.  for handle this time react have a Suspance function it is use for show something esle like loading. for more understanding goto app.js component and see Grocery component and how to route it 
  <!-- but when your application is small like some component then withought using lazy funtion its fine -->
  
### Higher Order function :- higher order function is nothing else its just a function its take a component and return a component 
* example  : use prometed tag on thi card 
 see video no 11 0 to 23 minutes 


# note:- after Higher ORder Function we leaarn about 
### White is Control and uncontrol conmponent
lifting the component 



