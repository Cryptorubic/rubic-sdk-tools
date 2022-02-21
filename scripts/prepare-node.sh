npx hardhat node &> hardhat.log &
last_pid=$!

while ! ( grep -q 'Account #19:' ./hardhat.log )
	do
		sleep 2
		echo "Waiting for node..."
	done

sleep 1
rm hardhat.log
cd ..

kill $last_pid

exit 0
