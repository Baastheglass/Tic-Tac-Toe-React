import './App.css';
import Table from './components/table';
import { Component, useEffect, useState, setState } from 'react';
import withNavigation from './components/withNavigation';
import { useNavigate } from 'react-router-dom';
import JSConfetti from 'js-confetti';



function getRandomInt(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// class App extends Component
// {
//   styles = {border: 'solid 1px black'}; 
//   constructor()
//   {
//     super();
//     this.state = {values : [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], turn: 'Turn: Player'};
//     var win1 = [0, 1, 2];
//     var win2 = [3, 4, 5];
//     var win3 = [6, 7, 8];
//     var win4 = [0, 4, 8];
//     var win5 = [2, 4 ,6];
//     var win6 = [0, 3, 6];
//     var win7 = [1, 4, 7];
//     var win8 = [2, 5, 8];
//     this.wins = [];
//     this.wins.push(win1,win2,win3,win4,win5,win6,win7,win8);
//     for(var i = 0; i < 9; i++)
//       console.log(this.wins[i]);
//     this.computerWin = false;
//     this.playerWin = false;
//     this.handleClick = this.handleClick.bind(this);
//   }
//   isBoardFull()
//   {
//     for(var i = 0; i < 9; i++)
//     {
//       if(this.state.values[i] === ' ')
//         return false;
//     }
//     return true;
//   }
//   checkWin()
//   { 
//     for(let i = 0; i < 8; i++)
//     {
//       if(this.state.values[this.wins[i][0]] === this.state.values[this.wins[i][1]] && this.state.values[this.wins[i][1]] === this.state.values[this.wins[i][2]] && this.state.values[this.wins[i][0]] !== ' ')
//       {
//         if(this.state.values[this.wins[i][0]] === 'X')
//           this.playerWin = true;
//         else
//           this.computerWin = true;
//         return true;
//       }
//     }
//     return false;
//   }
//   handleClick(index)
//   {
//     console.log("Click on index: " + index);
//     if(this.state.values[index] === ' ')
//     {
//       if(!this.isBoardFull() && !this.checkWin() && this.computerWin === false && this.playerWin === false)
//       {
//         this.state.values[index] = 'X';
//         this.setState({values:this.state.values,turn:"Turn: Computer"},()=>{
//           setTimeout(()=>
//           {
//             if(this.state.values[0] === 'X' && this.state.values[1] === 'X' && this.state.values[2] === ' ')
//               index = 2;
//             else if(this.state.values[2] === 'X' && this.state.values[1] === 'X' && this.state.values[0] === ' ')
//               index = 0;
//             else if(this.state.values[3] === 'X' && this.state.values[4] === 'X' && this.state.values[5] === ' ')
//               index = 5;
//             else if(this.state.values[5] === 'X' && this.state.values[4] === 'X' && this.state.values[3] === ' ')
//               index = 3;
//             else if(this.state.values[6] === 'X' && this.state.values[7] === 'X' && this.state.values[8] === ' ')
//               index = 8;
//             else if(this.state.values[8] === 'X' && this.state.values[7] === 'X' && this.state.values[6] === ' ')
//               index = 6;
//             else if(this.state.values[0] === 'X' && this.state.values[3] === 'X' && this.state.values[6] === ' ')
//               index = 6;
//             else if(this.state.values[6] === 'X' && this.state.values[3] === 'X' && this.state.values[0] === ' ')
//               index = 0;
//             else if(this.state.values[1] === 'X' && this.state.values[4] === 'X' && this.state.values[7] === ' ')
//               index = 7;
//             else if(this.state.values[7] === 'X' && this.state.values[4] === 'X' && this.state.values[1] === ' ')
//               index = 1;
//             else if(this.state.values[2] === 'X' && this.state.values[5] === 'X' && this.state.values[8] === ' ')
//               index = 8;
//             else if(this.state.values[8] === 'X' && this.state.values[5] === 'X' && this.state.values[2] === ' ')
//               index = 2;
//             else if(this.state.values[0] === 'X' && this.state.values[4] === 'X' && this.state.values[8] === ' ')
//               index = 8;
//             else if(this.state.values[8] === 'X' && this.state.values[4] === 'X' && this.state.values[0] === ' ')
//               index = 0;
//             else if(this.state.values[2] === 'X' && this.state.values[4] === 'X' && this.state.values[6] === ' ')
//               index = 6;
//             else if(this.state.values[6] === 'X' && this.state.values[4] === 'X' && this.state.values[2] === ' ')
//               index = 2;
//             else if(this.state.values[0] === 'X' && this.state.values[2] === 'X' && this.state.values[1] === ' ')
//               index = 1;
//             else if(this.state.values[3] === 'X' && this.state.values[5] === 'X' && this.state.values[4] === ' ')
//               index = 4;
//             else if(this.state.values[6] === 'X' && this.state.values[8] === 'X' && this.state.values[7] === ' ')
//               index = 7;
//             else if(this.state.values[0] === 'X' && this.state.values[6] === 'X' && this.state.values[3] === ' ')
//               index = 3;
//             else if(this.state.values[1] === 'X' && this.state.values[7] === 'X' && this.state.values[4] === ' ')
//               index = 4;
//             else if(this.state.values[2] === 'X' && this.state.values[8] === 'X' && this.state.values[5] === ' ')
//               index = 5;
//             else if(this.state.values[0] === 'X' && this.state.values[8] === 'X' && this.state.values[4] === ' ')
//               index = 4;
//             else if(this.state.values[2] === 'X' && this.state.values[6] === 'X' && this.state.values[4] === ' ')
//               index = 4;
//             else
//             {
//               console.log("Were past ifs");
//               if(!this.isBoardFull() && this.computerWin === false && this.playerWin === false)
//               {
//                 while(this.state.values[index] !== ' ')
//                   index = getRandomInt(0,8);
//                 this.state.values[index] = 'O';
//                 this.setState({values: this.state.values, turn: 'Turn: Player'});
//               }
//               else
//                 console.log("Were past the while loop");
//             }
    
//             if(!this.isBoardFull() && this.computerWin === false && this.playerWin === false)
//               {
//                 this.state.values[index] = 'O';
//                 this.setState({values: this.state.values, turn: 'Turn: Player'});  
//               }
  
//           }, 1000);
//         }) 
//         if(this.isBoardFull())
//         {
//           this.setState({turn: 'Board is full'});
//           this.props.navigate('/boardFull')
       
//         }
          
//         this.checkWin();
//         if(this.computerWin === true)
//           this.setState({turn: 'Borben has won ;--;'});
//         else if(this.playerWin === true)
//           this.setState({turn: 'You have won!'});
//         console.log("Ended ifs");
//       }
//       else
//       {
//         if(this.computerWin === false && this.playerWin === false)
//           this.setState({turn: 'Board is Full'});
//         else if(this.computerWin === true)
//           this.setState({turn: 'Borben has won ;--;'});
//         else
//           this.setState({turn: 'You have won!'});
//       }
//     }
//     else
//       this.setState({turn: 'Position is not empty'});
//   }
//   render() 
//   { 
//       return (
//         <>
//           <h1>Tic-Tac-Toe</h1>
//           <br/>
//           <p>{this.state.turn}</p>
//           <br/>
//           <Table blocks = {this.state.values} handleClick = {this.handleClick}/>
//         </>
//       );
//   }
// }

function App() {
  const styles = { border: 'solid 1px black' }; 
  const [values, setValues] = useState([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  const [turn, setTurn] = useState('Turn: Player');
  let computerWin = false;
  let playerWin = false;
  let wins = [];

  const win1 = [0, 1, 2];
  const win2 = [3, 4, 5];
  const win3 = [6, 7, 8];
  const win4 = [0, 4, 8];
  const win5 = [2, 4 ,6];
  const win6 = [0, 3, 6];
  const win7 = [1, 4, 7];
  const win8 = [2, 5, 8];
  const navigate = useNavigate();
  wins.push(win1);
  wins.push(win2);
  wins.push(win3);
  wins.push(win4);
  wins.push(win5);
  wins.push(win6);
  wins.push(win7);
  wins.push(win8);

  useEffect(() => 
  {
    
      setTimeout(() => {
        computerMove();
      }, 1000);
    
  }, [turn]);

  function isBoardFull() 
  {
    for (let i = 0; i < 9; i++) 
    {
      if (values[i] === ' ') 
      {
        return false;
      }
    }
    return true;
  }

  function checkWin() { 
    for (let i = 0; i < 8; i++) 
    {
      if (values[wins[i][0]] === values[wins[i][1]] && values[wins[i][1]] === values[wins[i][2]] && values[wins[i][0]] !== ' ') 
      {
        console.log(values[wins[i][0]], values[wins[i][1]], values[wins[i][2]]);
        if (values[wins[i][0]] === 'X') 
        {
          playerWin = true;
        } 
        else 
        {
          computerWin = true;
        }
        return true;
      }
    }
    return false;
  }

  function handleClick(index) 
  {
    if(turn === 'Turn: Player' || turn === 'Invalid move' && !isBoardFull() && !checkWin())
    {
      console.log("Click on index: " + index);
      if (values[index] === ' ') 
      {
        if (!isBoardFull() && !checkWin() && !computerWin && !playerWin) 
        {
          console.log('Intended if');
          let updatedValues = [...values];
          updatedValues[index] = 'X';
          setValues(updatedValues);
          setTurn('Turn: Computer');
          if(checkWin())
          {
            if(playerWin === true)
              setTurn('You win!');
            else
              setTurn('Borben wins ;--;');
          }
          if(isBoardFull())
            setTurn('Board is full');
          computerMove();
        }
        else
        {
          if(playerWin === true)
          {
            setTurn('You win!');
            navigate('/win');
            console.log("Navigated");
          }
          else
          {
            setTurn('Borben wins ;--;');
            navigate('/lose');
            console.log("Navigated");
          }
        }
      }
      else
      {
        if(checkWin())
        {
          if(playerWin === true)
          {
            setTurn('You win!');
            navigate('/win');
            console.log("Navigated");
          }
          else
          {
            setTurn('Borben wins ;--;');
            navigate('/lose');
            console.log("Navigated");
          }  
        }
        if(isBoardFull())
        {
          setTurn('Board is full');
          navigate('/boardFull');
          console.log("Navigated");
        }  
        else
          setTurn('Invalid move');
      }
    }
    else
    {
      console.log('PlayerWin', playerWin);
      console.log('ComputerWin', computerWin);
      if(checkWin())
      {
        if(playerWin === true)
        {
          setTurn('You win!');
          navigate('/win');
          console.log("Navigated");
        }
        else
        {
          setTurn('Borben wins ;--;');
          navigate('/lose');
          console.log("Navigated");
        }  
      }
      if(isBoardFull())
      {
        setTurn('Board is full');
        navigate('/boardFull');
        console.log("Navigated");
      }  
      else
        setTurn('Invalid move');
    }
  }
  function computerMove()
  {
    console.log('BoardFull', isBoardFull());
    console.log('checkWin', checkWin());
    if(turn === 'Turn: Computer' && !isBoardFull() && !checkWin())
    {
      console.log("In computer move");
      var index;
      let updatedValues = [...values];
      if(values[0] === 'O' && values[1] === 'O' && values[2] === ' ')
        index = 2;
      else if(values[2] === 'O' && values[1] === 'O' && values[0] === ' ')
        index = 0;
      else if(values[3] === 'O' && values[4] === 'O' && values[5] === ' ')
        index = 5;
      else if(values[5] === 'O' && values[4] === 'O' && values[3] === ' ')
        index = 3;
      else if(values[6] === 'O' && values[7] === 'O' && values[8] === ' ')
        index = 8;
      else if(values[8] === 'O' && values[7] === 'O' && values[6] === ' ')
        index = 6;
      else if(values[0] === 'O' && values[3] === 'O' && values[6] === ' ')
        index = 6;
      else if(values[6] === 'O' && values[3] === 'O' && values[0] === ' ')
        index = 0;
      else if(values[1] === 'O' && values[4] === 'O' && values[7] === ' ')
        index = 7;
      else if(values[7] === 'O' && values[4] === 'O' && values[1] === ' ')
        index = 1;
      else if(values[2] === 'O' && values[5] === 'O' && values[8] === ' ')
        index = 8;
      else if(values[8] === 'O' && values[5] === 'O' && values[2] === ' ')
        index = 2;
      else if(values[0] === 'O' && values[4] === 'O' && values[8] === ' ')
        index = 8;
      else if(values[8] === 'O' && values[4] === 'O' && values[0] === ' ')
        index = 0;
      else if(values[2] === 'O' && values[4] === 'O' && values[6] === ' ')
        index = 6;
      else if(values[6] === 'O' && values[4] === 'O' && values[2] === ' ')
        index = 2;
      else if(values[0] === 'O' && values[2] === 'O' && values[1] === ' ')
        index = 1;
      else if(values[3] === 'O' && values[5] === 'O' && values[4] === ' ')
        index = 4;
      else if(values[6] === 'O' && values[8] === 'O' && values[7] === ' ')
        index = 7;
      else if(values[0] === 'O' && values[6] === 'O' && values[3] === ' ')
        index = 3;
      else if(values[1] === 'O' && values[7] === 'O' && values[4] === ' ')
        index = 4;
      else if(values[2] === 'O' && values[8] === 'O' && values[5] === ' ')
        index = 5;
      else if(values[0] === 'O' && values[8] === 'O' && values[4] === ' ')
        index = 4;
      else if(values[2] === 'O' && values[6] === 'O' && values[4] === ' ')
        index = 4;

      else if(values[0] === 'X' && values[1] === 'X' && values[2] === ' ')
        index = 2;
      else if(values[2] === 'X' && values[1] === 'X' && values[0] === ' ')
        index = 0;
      else if(values[3] === 'X' && values[4] === 'X' && values[5] === ' ')
        index = 5;
      else if(values[5] === 'X' && values[4] === 'X' && values[3] === ' ')
        index = 3;
      else if(values[6] === 'X' && values[7] === 'X' && values[8] === ' ')
        index = 8;
      else if(values[8] === 'X' && values[7] === 'X' && values[6] === ' ')
        index = 6;
      else if(values[0] === 'X' && values[3] === 'X' && values[6] === ' ')
        index = 6;
      else if(values[6] === 'X' && values[3] === 'X' && values[0] === ' ')
        index = 0;
      else if(values[1] === 'X' && values[4] === 'X' && values[7] === ' ')
        index = 7;
      else if(values[7] === 'X' && values[4] === 'X' && values[1] === ' ')
        index = 1;
      else if(values[2] === 'X' && values[5] === 'X' && values[8] === ' ')
        index = 8;
      else if(values[8] === 'X' && values[5] === 'X' && values[2] === ' ')
        index = 2;
      else if(values[0] === 'X' && values[4] === 'X' && values[8] === ' ')
        index = 8;
      else if(values[8] === 'X' && values[4] === 'X' && values[0] === ' ')
        index = 0;
      else if(values[2] === 'X' && values[4] === 'X' && values[6] === ' ')
        index = 6;
      else if(values[6] === 'X' && values[4] === 'X' && values[2] === ' ')
        index = 2;
      else if(values[0] === 'X' && values[2] === 'X' && values[1] === ' ')
        index = 1;
      else if(values[3] === 'X' && values[5] === 'X' && values[4] === ' ')
        index = 4;
      else if(values[6] === 'X' && values[8] === 'X' && values[7] === ' ')
        index = 7;
      else if(values[0] === 'X' && values[6] === 'X' && values[3] === ' ')
        index = 3;
      else if(values[1] === 'X' && values[7] === 'X' && values[4] === ' ')
        index = 4;
      else if(values[2] === 'X' && values[8] === 'X' && values[5] === ' ')
        index = 5;
      else if(values[0] === 'X' && values[8] === 'X' && values[4] === ' ')
        index = 4;
      else if(values[2] === 'X' && values[6] === 'X' && values[4] === ' ')
        index = 4;
      else
      {
        console.log("Were past ifs");
        console.log("Chosen index: " + index);
        if(!isBoardFull() && computerWin === false && playerWin === false)
        {
          while(values[index] !== ' ')
            index = getRandomInt(0,8);
          console.log("Randomly chosen index: " + index);
          updatedValues[index] = 'O';
          setTurn('Turn: Player');
          setValues(updatedValues);
          console.log("CheckWin", checkWin());
          console.log("PlayerWin", playerWin);
          console.log("computerWin", computerWin);
          checkWin()
          if(playerWin === true)
          {
            setTurn('You win!');
            navigate('/win');
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti();
            console.log("Navigated");
          }
          else if(computerWin === true)
          {
            setTurn('Borben wins ;--;');
            navigate('/lose');
            console.log("Navigated");
          }
          if(isBoardFull())
          {
            setTurn('Board is full');
            navigate('/boardFull');
            console.log("Navigated");
          }
        }
        else
          console.log("Were past the while loop");
        }
        if(!isBoardFull() && computerWin === false && playerWin === false)
        {
          console.log("Updating values");
          updatedValues[index] = 'O';
          setValues(updatedValues);
          setTurn('Turn: Player'); 
          console.log("CheckWin", checkWin());
          console.log("PlayerWin", playerWin);
          console.log("computerWin", computerWin);
          if(checkWin())
          {
            if(playerWin === true)
            {
              setTurn('You win!');
              navigate('/win');
              const jsConfetti = new JSConfetti();
              jsConfetti.addConfetti();
              console.log('Navigated');
            }
            else
            {
              setTurn('Borben wins ;--;');
              navigate('/lose');
              console.log('Navigated');
            }  
          }
          if(isBoardFull())
          {
            setTurn('Board is full');
            navigate('/boardFull');
            console.log('Navigated');
          }  
      }
    }
    else
    {
      if(checkWin())
      {
        if(playerWin === true)
        {
          setTurn('You win!');
          navigate('/win');
          const jsConfetti = new JSConfetti();
          jsConfetti.addConfetti();
          console.log("Navigated");
        }
        else
        {
          setTurn('Borben wins ;--;');
          navigate('/lose');
          console.log("Navigated");
        }
      }
      if(isBoardFull())
      {
        setTurn('Board is full');
        navigate('/boardFull');
        console.log("Navigated");
      }   
    }
  }
  return(
    <>
      <h1 id = "title">Tic-Tac-Toe</h1>
      <br />
      <p id = "turn">{turn}</p>
      <br />
      <Table blocks={values} handleClick={handleClick} />
    </>
  );
}

export default App;
//export default withNavigation(App);

