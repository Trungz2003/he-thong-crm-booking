"use client";

import { useState } from "react";
import CustomerTable from "@/components/customer-table";
import CustomerDetailDrawer from "@/components/customer-detail-modal";
import TierConfigModal from "@/components/tier-config-modal";
import { Customer } from "@/interface/customer";

export default function Home() {
  const [showDetailDrawer, setShowDetailDrawer] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null,
  );

  const handleOpenDetail = (customer: Customer) => {
    setSelectedCustomer(customer);
    setShowDetailDrawer(true);
  };

  const handleCloseDetail = () => {
    setShowDetailDrawer(false);
    setSelectedCustomer(null);
  };

  return (
    <>
      <CustomerTable
        onOpenConfig={() => setShowConfigModal(true)}
        onOpenDetail={handleOpenDetail}
      />
      {selectedCustomer && (
        <CustomerDetailDrawer
          isOpen={showDetailDrawer}
          customer={selectedCustomer}
          onClose={handleCloseDetail}
        />
      )}
      {showConfigModal && (
        <TierConfigModal onClose={() => setShowConfigModal(false)} />
      )}
    </>
  );
}
