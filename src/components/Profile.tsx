import { useAccount, useEnsName } from "wagmi";

export function Profile() {
  const account = useAccount();
  const { data, error, status } = useEnsName(account);
  if (status === "pending") return <div>Loading ENS name</div>;
  if (status === "error")
    return <div>Error fetching ENS name: {error.message}</div>;

  return <div>ENS name: {data}</div>;
}
