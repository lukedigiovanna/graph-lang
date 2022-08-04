/*
Holds the interpreter for GraphLang

GraphLang is a language developed specifically for this application that
allows users to write code to manipulate graphs for visual display.

*/

/*

Documentation of GraphLang:

    GraphLang is a language developed specifically for this application that

    A graph is always internally stored as an adjacency matrix where the encoded value is
    the distance between the two nodes (from the row to the column). 
    If the value is 0, then the nodes are not connected.

    The script has access to the following types
        number - a number
        list   - a list of any type
            .length - the length of the list
            .shift() - removes the first element of the list
            .unshift(element) - adds an element to the beginning of the list
            .push(element)  - adds an element to the end of the list
            .pop()   - removes the last element of the list
            [index] - returns the element at the given index
        node   - a node in a graph
            .edges - a list of tuple pairs of (node, distance)
            .graph - the graph that this node belongs to
            .id    - a unique number representing the ID of the node in the graph (0-indexed)
        
        graph - a graph


    The script has access to the follow global variables:

        - graph: the current graph target. This is set by the user through a template or manual creation.
            graph.

 */

enum Command {
    MAKE_NUMBER_VARIABLE, // expects a variable name and a number
    
}

class GraphLang {
    execute(script: string) {
        // parse the script into tokens of commands
    }
}

export {}