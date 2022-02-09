# SmartbearCucucmberProject

This is automated web testing for any web application. Its using page object model as a pattern structure and BDD (Behavior Driven Development) framework 
as a testing approach with single gherkin language and data-driven style. Its using 4 folders and 1 file in the root directory.

pages folder :
This folder contain some files that initiate all of page elements, also their action as objects.
steps folder :
This folder contain some files that initiate any reusable steps.
Its steps should have direct relations to specific test files.
runners folder:
This folder contain some files that test cases executed.
text folder :
This folder contains some expected text that used in step folder.
utilities folder :
Thi folder contains some mrthods that used in step folder for reducing code duplication.
feature file :
Its can contain some reusable steps for specific test cases that use data-driven or gherkin language on the same test files.
target folder :
This folder for saving result file of report that generate after tests execute has finished.
