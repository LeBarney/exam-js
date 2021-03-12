var pyramide = (number) => 
{
    for(let i=1;i<=number;i++)
    {
        let ligne = "";
        for(let k=0;k<i;k++)
        {
            ligne += i;
        }
        console.log(ligne);
    }
}

pyramide(8)