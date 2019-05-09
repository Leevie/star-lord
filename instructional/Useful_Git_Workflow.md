**If you are starting out from the local master before creating a local branch: ** 
	1.Complete the following steps to see if you have any files to add and commit:  
	`git status`  
	`git add -A`  
	`git commit -m"your message here"`  
	2.Pull in the remote master into your local master using the command:  
	`git pull`  
	3. Resolve any merge conflicts by comparing the incoming changes (from the master) with the current changes (your local master).    
	4. Create a new local branch with your initials and the feature you will be working on:  
	`git branch "kb_your_local_feature_branch"`     
	5. Switch branches to you new local feature branch.  
	`git branch "your local feature branch"`  
	6. Work on whatever you need to work on in your local feature branch.   
	
**If you are working from your local branch already and you are ready to push your code then start here**  
	7. Complete the following steps to see if you have any files to add and commit:  
	`git status`  
	`git add -A`  
	`git commit -m"your message here"`  
	8. Pull in your remote master into your local feature branch:
	`git pull origin master`  
	9.  Resolve any merge conflicts by comparing the incoming changes (from the master) with the current changes (your local feature branch).  Accept the changes from the source you want to keep.
	10. Complete the following steps to add and commit your updated local branch:  
	`git add -A`  
	`git commit -m"your message here"`  
	`git push origin "kb_your_local_feature_branch`
	11. You're almost done! Go into github and put in a pull request. 
	12. Once your pull request is good to go, merge into master.