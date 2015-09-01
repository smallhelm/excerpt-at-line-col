module.exports = function(text, line_n, col_n, n_surrounding_lines){
  n_surrounding_lines = n_surrounding_lines || 0;

  return text.split("\n").map(function(line, line_i){
    return {
      line: line,
      line_n: line_i
    };
  }).filter(function(l){
    return Math.abs(l.line_n - line_n) <= n_surrounding_lines;
  }).map(function(l){
    if(l.line_n !== line_n){
      return l.line;
    }
    var col_position_whitespace = '';
    var j;
    for(j=0; j<Math.min(col_n, l.line.length); j++){
      col_position_whitespace += l.line[j].replace(/[^\s]/g, " ");
    }
    return l.line + "\n" + col_position_whitespace + '^';
  }).join("\n");
};
