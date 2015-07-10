### Lession 3 - Homework 2 - Вывести файловую структуру
	
Написать метод `PrintStructure` который в консоль выведет все имена папок и файлов с правильными отступами (зависящими от вложенности)
Объект на вход:
```
var folder = {
	name:'папка 1',
	files:[
		{name:'file1'},
		{name:'file2'},
		{name:'папка 2', files: [
			{name:'папка 3', files: [
				{name:'file3'},
				{name:'file4'}
			]},
			{name:'папка 44', files: [
				{name:'папка 5',files: [
					{name:'file6'},
					{name:'file7'},
					{name:'папка 6',files:[]},
				]},
			]}
		]},
		{name:'File8'},
		{name:'FOlderxxxX',files: [
			{name:'File9'},
			{name:'фывфы 10'}
		]}
	]
}
```