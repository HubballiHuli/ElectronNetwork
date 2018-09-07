  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
  ]);

  
  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 3,label:'8'},
    {from: 1, to: 2,label:'4'},
    {from: 2, to: 4,label:'6'},
    {from: 2, to: 5,label:'7'},
    {from: 4, to: 5,label:'5'},
  ]);

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
    physics:false
  };
  var network = new vis.Network(container, data, options);
