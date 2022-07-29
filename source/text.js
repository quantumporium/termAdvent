#!/usr/bin/node

let json = require("./ex.json")

//console.log(json, "this is a -->", typeof json)

//console.log("-=-=-=-=-=-= room 1 dungeon -=-=-=-=-=-=")

function describe_room(room_nb){
	console.log(`-=-= You are in room nb ${room_nb} =-=-`)
	console.log("\n", json[room_nb]["room_description"], "\n")
}

function let_out_choice(room_nb){
	console.log("what do you do: ")
	for( let i = 0; i <= json[room_nb]["nb_choices"]; i++){
		console.log(`[${i}]: ${json[room_nb]["choice"][i]}`)
	}
}


for( let i = 0; i <= 2; i++){
	describe_room(i)
	let_out_choice(i)
	console.log("\n\n\n\n")
}


