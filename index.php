<?php
  if(isset($_POST))
  {
    $operand1=$_POST['operand1'];
    $operand2=$_POST['operand2'];
    $operator=$_POST['operator'];
    solve();
  }

  function solve()
  {
    global $operator, $operand1, $operand2;
    switch ($operator) 
    {
      case '+': 
        $x=($operand1)+($operand2);		  
        break;
      case '-': 
        $x=($operand1)-($operand2);		  
        break;
      case '*': 
        $x=($operand1)*($operand2);		  
        break;
      case '/': 
        if($operand2==0)
        {
          $x="infinity";
        }
        else
        {
          $x=($operand1)/($operand2);
        }		  
        break;  
        default:
        break;
    }
    echo ($x);
  }
?>