# Install
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/node" "/usr/local/bin/node"
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/npm" "/usr/local/bin/npm"
nvm install 18
sudo yum install -y git
npm install -g ts-node

# https://devdojo.com/bobbyiliev/how-to-keep-a-process-running-even-after-closing-ssh-connection
screen -ls
# if screen does NOT yet exist, then: 'screen -S hexlines'. Otherwise:
screen -R hexlines
# CTRL+a+d to detach from screen

# Kill existing process
echo "Processes to be killed: server@$(lsof -t -i:8082) client@$(lsof -t -i:3000)"
kill -9 $(lsof -t -i:8082) $(lsof -t -i:3000)

# Download Ancient
cd $HOME
sudo rm -rf ancient
git clone https://github.com/simonkarman/ancient.git
cd $HOME/ancient/server && npm install
cd $HOME/ancient/client && npm install

# Setup environment
export METADATA_TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"`
export IPV4_ADDRESS=$(curl -H "X-aws-ec2-metadata-token: $METADATA_TOKEN" -v http://169.254.169.254/latest/meta-data/public-ipv4)
sed -i -- "s/localhost/$IPV4_ADDRESS/g" $HOME/ancient/client/src/App.tsx

# (Re)start client and server
cd $HOME/ancient/client && FORCE_COLOR=true npm start | cat &
sleep 15
echo "Connect to http://$IPV4_ADDRESS:3000"
cd $HOME/ancient/server && GAME_NAME=hexlines ts-node src/index.ts

# end: CTRL+a+d to detach from screen
