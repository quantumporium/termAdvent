#!/usr/bin/node

let dungeon_json = require('./dungeon.json')
let input_prompt = require('prompt-sync')()

// give description on the room
function describe_room( room_nb ){
	console.clear() // clear the console
	
	console.log(`-=-= Welcome to room ${room_nb} =-=-`)
	console.log("\n", dungeon_json[room_nb]["room_description"], "\n")

}

// give choice to user
function print_choice( room_nb ){
	console.log("What do you do:")
	for( let i = 0; i < dungeon_json[room_nb]["nb_choices"]; i++){
		console.log(`[${i}]: ${dungeon_json[room_nb]["choices"][i]}`)
	}
}

// get user input - parse and validate
function get_user_input(){
	let good_input = true

	while( good_input ){
	user_choice = input_prompt('What do you whant to do: ');

		if( user_choice != '0' || user_choice != '1' ){
			return user_choice
		}
	}
}

// execute user input choice
function do_user_input( user_choice, room_nb ){
	
	if( user_choice == '0' || user_choice == 0){
		 user_room = dungeon_json[room_nb]["nx_room"]
	}

	if( user_choice == '1' || user_choice == 1){
		 user_room = dungeon_json[room_nb]["pr_room"]
	}

	return user_room

}

// main flow
room_nb = 0

while( true ){
	describe_room( room_nb )
	print_choice( room_nb )
	user_choice = get_user_input()
	room_nb = do_user_input( user_choice, room_nb )
	
	if( room_nb == '-1' || room_nb == -1){
		console.clear()
		console.log("\t-=-=-=-=-= You decided to not enter the dungeon =-=-=-=-=-");
		return
	}

	if( room_nb == '10' || room_nb == 10){
		console.clear()
		console.log("-=-=-=-=-= You found the chest -=-=-=-=-=")
		console.log("  ________  ")
		console.log(" /________\\ ")
		console.log(" |   []   | congratulation !! ")
		console.log(" |________| You found the chess \n")
		return
	}
}


