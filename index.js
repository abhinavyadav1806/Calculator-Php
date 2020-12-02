var operand1='',
operand2='',
np=0,
tp=-1,
op = [],
eqlpress=0;

function num(val)
{
  if(np==0)
  {
    operand1+=val;
    dis(operand1);
  }
  else{
    operand2+=val;
    dis(operand2);
  }
}

function opr(val)
{ 
  np=1;
  if(op.length==0)
  {
    tp++;
    op[tp]=val;
  }
  else
  {
    solve();
    op[tp]=val; 		
  }
} 

function dis(val) 
{ 
  document.getElementById("result").value=val; 
} 

function solve() 
{ 
  var x=$.ajax
  ({
    url: 'index.php',
    type: 'POST',
    data: 
    {
      operand1,
      operand2,
      operator:op[tp]
    },
    dataType: 'html',
  });

  x.done(function(response)
  {
    dis(response);
    operand1=response;
    operand2='';
    if(eqlpress==1 || response=='infinity')
    {
      eqlpress=0;
      reset();
    }
  });

  x.fail(function()
  {
    alert("error");
  });
} 

function calc() 
{ 
  eqlpress=1;
  solve();
} 

function reset()
{
  operand1='';
  operand2='';
  op.pop();
  tp=-1;
  np=0;
}

function clr()
{
  reset();
  dis('');
}