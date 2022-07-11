import {useRouter} from "next/router";
import Link from "next/link";

export default function CoffeeStore(props){
    const router = useRouter();

    return <div>
        Coffee Store Page #{router.query?.id}<br/>
        <Link href={"/coffee-store/one"}>
            <a>Go to page one</a>
        </Link>
    </div>
}
