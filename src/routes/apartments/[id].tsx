import { useParams } from "@solidjs/router";
import { Apartment } from "../../components/Apartment";

export default function ApartmentPage() {
  const params = useParams();

  return (
    <section class="page-inner mx-auto max-w-4xl px-6 py-12 lg:px-10">
      <Apartment id={params.id} />
    </section>
  );
}
