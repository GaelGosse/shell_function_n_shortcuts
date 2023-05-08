#
# ~/.bashrc
#

PRPT() {
	rtn_val=$?
	ACT_PATH="$(pwd)/*"
	file_nbr=0
	dir_nbr=0
	ln_nbr=0
	for file in $ACT_PATH
	do
		dir="$(dirname "${file}")"
		filename="$(basename "${file}")"
		if [[ -f $file ]]; then
			let "file_nbr+=1"
		elif [[ -L $file ]]; then
			let "ln_nbr+=1"
		elif [[ -d $file ]]; then
			let "dir_nbr+=1"
		fi
	done

	local user='\u'
	local host='\h'
	local dir='\[\e[36;1;85m\]'"$(pwd)"'\[\e[0m\]'
	local old_files_folder='\[\e[36;6;85m\]files: \[\e[33m\]'"$file_nbr"'    \[\e[36;6;85m\]dir: \[\e[33m\]'"$dir_nbr"'\[\e[0m\]'
	local files_folder='\[\e[37;6m\]files: \[\e[33m\]'"$file_nbr"'    \[\e[37;6m\]dir: \[\e[33m\]'"$dir_nbr"'\[\e[0m\]'
	local prompt="$dir    $files_folder\n\[\e[36m\] $user\[\e[33;1m\]@\[\e[0;36m\]$host\[\e[0m\] \[\e[36m\]♠\[\e[0m\]"
	local line1="\[\e[36m\]┌───── \[\e[33m\]$(date +'%T') \[\e[36m\]$(pwd)\[\e[0m\]"
	local line2="\[\e[36m\]│ \[\e[0;46;30m\][$user\[\e[0;46;30m\] @ \[\e[0;46;30m\]$host]\[\e[0;1;37m\]  $(basename $PWD)\[\e[0m\]    "
	local line3="\[\e[36m\]└─ ♠ \[\e[0m\]"

	local w_files_folder='\[\e[37;6m\]files: \[\e[31m\]'"$file_nbr"'    \[\e[37;6m\]dir: \[\e[31m\]'"$dir_nbr"'\[\e[0m\]'
	local w_line1="\[\e[36m\]┌───── \[\e[31m\]$(date +'%T') \[\e[36m\]$(pwd)\[\e[0m\]"
	local w_line3="\[\e[36m\]└─ \[\e[31m\]♠ \[\e[0m\]"
	if [[ $rtn_val -eq 0 ]]
	then
		echo "$line1\n$line2$files_folder\n$line3"
	else
		echo "$w_line1\n$line2$w_files_folder\n$w_line3"
	fi
}

PROMPT_COMMAND='PS1="$(PRPT)"'
PS1='$(PRPT)'

alias cp="cp -i"                          # confirm before overwriting something
alias df='df -h'                          # human-readable sizes
alias free='free -m'                      # show sizes in MB
alias np='nano -w PKGBUILD'
alias more=less
alias b='source ~/.bashrc'
alias grep='grep --color=never'
alias ls='ls --color=never'
alias lsort='lt -t'
alias launch_test='code ~/save_shortcut/.bash_testing && source ~/save_shortcut/.bash_testing'
alias cfgb='code ~/.bashrc'
alias open='xdg-open .'
alias ..='cd ..'

source ~/.shortcut
