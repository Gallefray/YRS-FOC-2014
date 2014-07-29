function Goverment(t,n){return this.dept=0,this.income=t,this.outgoing=0,this.departments=n,this.step=function(){var t,n;
this.outgoing=0,t=[],n=0;
for(i in this.departments)this.outgoing+=this.departments[i].amount,n=this.departments[i].get_complaints(),0!=n&&(t[t.length]=n);
return this.outgoing>this.income&&(this.dept=this.outgoing-this.income),t
},this.toString=function(){return"Goverment(dept="+this.dept+" pounds income="+this.income+" pounds outgoing="+this.outgoing+" pounds)"
},this
}function Department(t,n){return this.name=t,this.amount=n,this.start_amount=n,this.get_complaints=function(){return this.amount<this.start_amount/2?"Too little money being invested in "+this.name:0
},this.toString=function(){return'Department(name="'+this.name+'", amount='+this.amount+" pounds)"
},this
}
